import sharp, { Metadata, Stats } from "sharp";

export type rgbObject = {
  r: number;
  g: number;
  b: number;
};

export type hslObject = {
  h: number;
  s: number;
  l: number;
};

export function formatRgbObject(rgb: rgbObject) {
  return rgb.r + ", " + rgb.g + ", " + rgb.b;
}

export async function getDominantColor(imageUrl: string): Promise<rgbObject> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { dominant } = await sharp(buffer).stats();
  const rgb: rgbObject = { r: dominant.r, g: dominant.g, b: dominant.b };

  return rgb;
}

export function getRelativeLuminance(color: rgbObject): number {
  const rgb: number[] = [color.r, color.g, color.b];
  const a: number[] = rgb.map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export async function getAverageTopColor(imageUrl: string): Promise<rgbObject> {
  const response: Response = await fetch(imageUrl);
  const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
  const buffer: Buffer = Buffer.from(arrayBuffer);

  const metadata: sharp.Metadata = await sharp(buffer).metadata();

  if (metadata && typeof metadata.width === "number") {
    // Extract only the top line of the image
    const topLineBuffer: Buffer = await sharp(buffer)
      .extract({ left: 0, top: 0, width: metadata.width, height: 1 })
      .toBuffer();

    // Get the average color of that line
    const stats: sharp.Stats = await sharp(topLineBuffer).stats();
    const avg: number[] = stats.channels.map((channel) =>
      Math.round(channel.mean)
    );
    const rgb: rgbObject = { r: avg[0], g: avg[1], b: avg[2] };

    return rgb;
  } else {
    throw new Error("Image metadata is undefined or does not contain width");
  }
}
export function makeColorMoreContrasty(
  rgb: rgbObject,
  operation: "lighten" | "darken"
): rgbObject {
  const rgbValues: number[] = [rgb.r, rgb.g, rgb.b];

  const adjustPercentage: number = 0.3;

  const adjustedRgbValues: number[] = rgbValues.map((value) => {
    if (operation === "lighten") {
      return Math.min(value + value * adjustPercentage, 255);
    } else {
      return Math.max(value - value * adjustPercentage, 0);
    }
  });

  const adjustedRgb: rgbObject = {
    r: adjustedRgbValues[0],
    g: adjustedRgbValues[1],
    b: adjustedRgbValues[2],
  };

  return adjustedRgb;
}

function rgbToHsl(rgb: rgbObject): hslObject {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0; // Initialize h to ensure it's never undefined
  let s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else if (max === b) {
      h = (r - g) / d + 4;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
}

function hslToRgb(hsl: hslObject): rgbObject {
  let r, g, b;
  let h = hsl.h / 360;
  let s = hsl.s;
  let l = hsl.l;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

export function makeColorMoreContrastyPreservingSaturation(
  rgb: rgbObject,
  operation: "lighten" | "darken",
  adjustPercentage: number = 0.275,
  adjustSaturation: number = 0.85
): rgbObject {
  const hsl = rgbToHsl(rgb);

  // Adjust lightness
  if (operation === "lighten") {
    hsl.l = Math.min(hsl.l + adjustPercentage, 1);
  } else {
    hsl.l = Math.max(hsl.l - adjustPercentage, 0);
    hsl.s = Math.max(hsl.s + adjustSaturation, 1);
  }

  return hslToRgb(hsl);
}
