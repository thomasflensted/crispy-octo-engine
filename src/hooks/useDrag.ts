import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import getDragOffset from "../utils/drag/getDragOffset";
import getUpdatedPosOnResize from "../utils/drag/getUpdatedPosOnResize";
import getUpdatedPosOnDrag from "../utils/drag/getUpdatedPosOnDrag";

export type Position = { x: number; y: number };

type Options = {
  initialPosition: Position;
  onDragEnd: (position: Position) => void;
};

export const useDrag = ({ onDragEnd, initialPosition }: Options) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    dragOffset.current = getDragOffset(e, elementRef);
  };

  const handleResize = useCallback(() => {
    if (!elementRef.current) return;
    const { x, y } = getUpdatedPosOnResize(elementRef, position);
    if (x !== position.x || y !== position.y) setPosition({ x, y });
  }, [position]);

  const handleDrag = (e: MouseEvent) => {
    const newPosition = getUpdatedPosOnDrag({ ref: elementRef, dragOffset: dragOffset.current, e });
    setPosition(newPosition);
  };

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (onDragEnd) onDragEnd(position);
  }, [onDragEnd, position]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position, handleResize]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleDragEnd);
      return () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging, position, onDragEnd, handleDragEnd]);

  return { position, isDragging, elementRef, handleMouseDown };
};
