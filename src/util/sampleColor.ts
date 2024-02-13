// components/DominantColor.server.tsx

import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

// Function to fetch and process the image
export async function getDominantColor(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { dominant } = await sharp(buffer).stats();
  const rgb = `${dominant.r}, ${dominant.g}, ${dominant.b}`;

  return rgb;
}

// Function to calculate relative luminance
export function getRelativeLuminance(color: string): number {
  const rgb = color.split(",").map(Number);
  const a = rgb.map(function (v) {
    v /= 255; // Scale v to be in the range 0-1
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Example of an API endpoint using this function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imageUrl } = req.query;

  if (typeof imageUrl === "string") {
    const dominantColor = await getDominantColor(imageUrl);
    res.status(200).json({ dominantColor });
  } else {
    res.status(400).json({ error: "Invalid image URL" });
  }
}
