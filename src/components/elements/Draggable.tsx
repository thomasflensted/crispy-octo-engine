import { useState, useRef, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

interface Position {
  x: number;
  y: number;
}

interface DraggableProps {
  initialPosition?: Position;
  children: React.ReactNode;
  boundaryPadding?: number;
}

const Draggable = ({ initialPosition = { x: 400, y: 400 }, children }: DraggableProps) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef<Position>({ x: 0, y: 0 });

  const keepInBounds = (newX: number, newY: number): Position => {
    if (!elementRef.current) return { x: newX, y: newY };

    const element = elementRef.current;
    const elementRect = element.getBoundingClientRect();

    const maxX = window.innerWidth - elementRect.width;
    const maxY = window.innerHeight - elementRect.height;

    return { x: Math.min(newX, maxX), y: Math.min(newY, maxY) };
  };

  const handleMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!isDragging) return;
      const newPosition = keepInBounds(clientX - dragOffset.current.x, clientY - dragOffset.current.y);
      setPosition(newPosition);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setIsDragging(false));
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", () => setIsDragging(false));
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      className={`w-1/3 absolute cursor-grab ${isDragging ? "cursor-grabbing z-0" : ""}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      {children}
    </div>
  );
};

export default Draggable;
