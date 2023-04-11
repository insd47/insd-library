export const TextStyles = {
  title: [
    {
      size: 26,
      line: 34,
      weight: 700,
    },
    {
      size: 22,
      line: 30,
      weight: 700,
    },
    {
      size: 18,
      line: 24,
      weight: 700,
    },
  ],
  paragraph: [
    {
      size: 16,
      line: 28,
      weight: 400,
    },
    {
      size: 14,
      line: 24,
      weight: 400,
    },
  ],
  uin: [
    {
      size: 16,
      line: 22,
      weight: 400,
    },
    {
      size: 14,
      line: 18,
      weight: 400,
    },
    {
      size: 12,
      line: 16,
      weight: 400,
    },
    {
      size: 10,
      line: 14,
      weight: 400,
    },
  ],
  uim: [
    {
      size: 16,
      line: 22,
      weight: 500,
    },
    {
      size: 14,
      line: 18,
      weight: 500,
    },
    {
      size: 12,
      line: 16,
      weight: 700,
    },
    {
      size: 10,
      line: 14,
      weight: 700,
    },
  ],
};

export const Weights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const FindTemplate = (type: string, template: number): number =>
  type === "title" && template > 3
    ? 2
    : type === "paragraph" && template > 2
    ? 1
    : template - 1;
