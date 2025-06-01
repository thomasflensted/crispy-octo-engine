import type { RefObject } from "react";

type Args = {
  ref: RefObject<HTMLDivElement | null>;
  e: MouseEvent;
  dragOffset: { x: number; y: number };
};

export default function getUpdatedPosOnDrag({ ref, e, dragOffset }: Args) {
  const newX = e.clientX - dragOffset.x;
  const newY = e.clientY - dragOffset.y;
  const { innerWidth, innerHeight } = window;

  if (!ref.current) return { x: newX / innerWidth, y: newY / innerHeight };

  const elementRect = ref.current.getBoundingClientRect();

  const maxX = innerWidth - elementRect.width;
  const maxY = innerHeight - elementRect.height;

  const clampedX = Math.max(0, Math.min(newX, maxX));
  const clampedY = Math.max(0, Math.min(newY, maxY));

  const x = clampedX / innerWidth;
  const y = clampedY / innerHeight;

  return { x, y };
}
