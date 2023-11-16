import { ReactNode } from "react";

export type ModalProps = {
  title?: string;
  width?: number;
  content?: string | JSX.Element;
  custom?: boolean;
  buttons?: ReactNode[];
  open?: boolean;
  onClose?: () => void;
  outsideClick?: boolean;
};
