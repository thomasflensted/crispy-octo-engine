import { type MouseEvent } from "react";
// import type { Position } from "../../hooks/useDrag";

export default function getDragOffset(e: MouseEvent, elementRef: React.RefObject<HTMLDivElement | null>) {
  if (!elementRef.current) return { x: 0.5, y: 0.5 };
  const rect = elementRef.current.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  return { x: offsetX, y: offsetY };
}
