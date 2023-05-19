export const getDiff = (point, rect) => {
  const { x, y } = point;
  const { x: rectX, y: rectY } = rect;

  return {
    x: x - rectX,
    y: y - rectY,
  };
};

export const getLine = (p1, p2) => {
  return {
    x1: p1.x,
    y1: p1.y,
    x2: p2.x,
    y2: p2.y,
  };
};

export const isTwoDotsSame = (p1, p2) => p1.x === p2.x && p1.y === p2.y;

export const getPointFromEvent = (e) => ({ x: e.pageX, y: e.pageY });
