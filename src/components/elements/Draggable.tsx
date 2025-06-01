import { useMemo, type ReactNode } from "react";
import { useDrag, type Position } from "../../hooks/useDrag";

type Props = {
  onDragEnd: (position: Position) => void;
  children: ReactNode;
  initialPosition: Position;
};

const Draggable = ({ children, onDragEnd, initialPosition }: Props) => {
  const { position, isDragging, elementRef, handleMouseDown } = useDrag({ onDragEnd, initialPosition });

  const { nominalX, nominalY } = useMemo(
    () => ({
      nominalX: window.innerWidth * position.x,
      nominalY: window.innerHeight * position.y,
    }),
    [position.x, position.y]
  );

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      className={`w-1/3 absolute cursor-grab ${isDragging ? "cursor-grabbing z-0" : ""}`}
      style={{ transform: `translate(${nominalX}px, ${nominalY}px)` }}>
      {children}
    </div>
  );
};

export default Draggable;
