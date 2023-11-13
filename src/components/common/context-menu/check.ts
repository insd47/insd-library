import { createContext } from "react";

export const TriangleContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

type Point = [number, number];
type CrossPoint = [number, number, number, number];

export default function isPointInTriangle(
  p: Point,
  a: Point,
  b: Point,
  c: Point
) {
  // 벡터의 외적을 계산하는 함수
  const crossProduct = (...n: CrossPoint) => n[0] * n[3] - n[1] * n[2];

  // 삼각형의 각 변에 대해 점이 한쪽에 있는지 확인
  let d1, d2, d3;
  let has_neg, has_pos;

  d1 = crossProduct(p[0] - a[0], p[1] - a[1], b[0] - a[0], b[1] - a[1]);
  d2 = crossProduct(p[0] - b[0], p[1] - b[1], c[0] - b[0], c[1] - b[1]);
  d3 = crossProduct(p[0] - c[0], p[1] - c[1], a[0] - c[0], a[1] - c[1]);

  has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  has_pos = d1 > 0 || d2 > 0 || d3 > 0;

  return !(has_neg && has_pos);
}
