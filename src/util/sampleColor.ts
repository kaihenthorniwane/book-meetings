import sharp, { Metadata, Stats } from "sharp";

export async function getDominantColor(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { dominant } = await sharp(buffer).stats();
  const rgb = `${dominant.r}, ${dominant.g}, ${dominant.b}`;

  return rgb;
}

export function getRelativeLuminance(color: string): number {
  const rgb: number[] = color.split(",").map(Number);
  const a: number[] = rgb.map(function (v) {
    v /= 255; // Scale v to be in the range 0-1
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export async function getAverageTopColor(
  imageUrl: string,
  heightFraction: number = 0.1
): Promise<string> {
  const response: Response = await fetch(imageUrl);
  const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
  const buffer: Buffer = Buffer.from(arrayBuffer);

  const metadata: Metadata = await sharp(buffer).metadata();

  if (
    metadata &&
    typeof metadata.height === "number" &&
    typeof metadata.width === "number"
  ) {
    const topHeight: number = Math.round(metadata.height * heightFraction);

    const topSliceBuffer: Buffer = await sharp(buffer)
      .extract({ left: 0, top: 0, width: metadata.width, height: topHeight })
      .toBuffer();

    const stats: Stats = await sharp(topSliceBuffer).stats();
    const avg: number[] = stats.channels.map((channel) =>
      Math.round(channel.mean)
    );
    const rgb: string = `${avg[0]}, ${avg[1]}, ${avg[2]}`;

    return rgb;
  } else {
    throw new Error(
      "Image metadata is undefined or does not contain height and width"
    );
  }
}
