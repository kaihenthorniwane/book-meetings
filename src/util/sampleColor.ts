// components/DominantColor.server.tsx

import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

// Function to fetch and process the image
export async function getDominantColor(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { dominant } = await sharp(buffer).stats();
  const rgb = `rgb(${dominant.r}, ${dominant.g}, ${dominant.b})`;

  return rgb;
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
