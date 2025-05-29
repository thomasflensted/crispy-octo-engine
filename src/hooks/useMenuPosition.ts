type MousePosition = { x: number; y: number };

export const useMenuPosition = (mousePosition: MousePosition) => {
  const mid = "-45%";
  const left = "-100%";
  const right = "15%";
  const up = "-110%";
  const down = "0";

  const getX = () => {
    if (mousePosition.x < 200) return right;
    if (mousePosition.x > window.innerWidth - 200) return left;
    return mid;
  };

  const getY = () => {
    if (mousePosition.y > window.innerHeight - 200) return up;
    return down;
  };

  return { translateX: getX(), translateY: getY() };
};
