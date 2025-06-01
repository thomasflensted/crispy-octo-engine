type MousePosition = { x: number; y: number };

export const getMenuPosition = (mousePosition: MousePosition) => {
  const horizontalThreshold = 75;
  const verticalThreshold = 200;
  const mid = "-45%";
  const left = "-110%";
  const right = "15%";
  const up = "-110%";
  const down = "0";

  const getX = () => {
    if (mousePosition.x < horizontalThreshold) return right;
    if (mousePosition.x > window.innerWidth - horizontalThreshold) return left;
    return mid;
  };

  const getY = () => {
    if (mousePosition.y > window.innerHeight - verticalThreshold) return up;
    return down;
  };

  return { translateX: getX(), translateY: getY() };
};
