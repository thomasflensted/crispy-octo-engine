import type { RefObject } from "react";
import type { Position } from "../../hooks/useDrag";

export default function getUpdatedPosOnResize(ref: RefObject<HTMLDivElement | null>, position: Position) {
  if (!ref.current) return position;

  const { innerWidth, innerHeight } = window;
  const { width, height } = ref.current.getBoundingClientRect();

  // Ensure the element stays within bounds after resize
  const maxX = innerWidth - width;
  const maxY = innerHeight - height;

  // Calculate the current pixel position based on the percentage position
  const currentPixelX = innerWidth * position.x;
  const currentPixelY = innerHeight * position.y;

  // Check if current position is out of bounds (i.e., negative or exceeds the maximum)
  const clampedX = Math.max(0, Math.min(currentPixelX, maxX));
  const clampedY = Math.max(0, Math.min(currentPixelY, maxY));

  // Convert the clamped pixel position back to percentage
  const newXPct = clampedX / innerWidth;
  const newYPct = clampedY / innerHeight;

  return { x: newXPct, y: newYPct };
}
