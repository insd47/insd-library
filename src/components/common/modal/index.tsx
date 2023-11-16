"use client";

import React from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";
import LazyMount from "../lazy-mount";
import useLayer from "../../../../pkg/dist/tools/useLayer";

import { StyledButtons, StyledModal, StyledTemplate } from "./styles";
import {
  Children,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import { ButtonProps } from "../../input/button/types";

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  content,
  buttons,
  children,
  width,
  open = false,
  onClose,
  outsideClick = true,
}) => {
  // layer declaration
  const [hasLayer, layerRef] = useLayer("__modal", 200);
  const modalRef = useRef<HTMLDivElement>(null);

  // handle click outside
  const handleClickOutside = (e: MouseEvent) => {
    const { target } = e;
    const node = modalRef.current;

    if (node && !node.contains(target as Node)) onClose?.();
  };

  useEffect(() => {
    if (open && outsideClick) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [open]);

  return hasLayer
    ? createPortal(
        <LazyMount enabled={open} renderDelay={10} transitionDuration={300}>
          {(visible) => (
            <StyledModal ref={modalRef} width={width} isVisible={visible}>
              <div>
                {children ?? (
                  <StyledTemplate>
                    <div>
                      <p className="text-title-2">{title}</p>
                    </div>
                    <div>{content}</div>
                  </StyledTemplate>
                )}
                {buttons && (
                  <StyledButtons>
                    {(Children.toArray(buttons) as ReactNode[]).map(
                      (button) => {
                        if (
                          isValidElement(button) &&
                          button.props.size !== "small"
                        ) {
                          return cloneElement(button, {
                            size: "small",
                          } as ButtonProps);
                        }
                        return button;
                      }
                    )}
                  </StyledButtons>
                )}
              </div>
            </StyledModal>
          )}
        </LazyMount>,
        layerRef.current!
      )
    : null;
};

export const useModal = (props: Omit<ModalProps, "open" | "onClose">) => {
  const [open, setOpen] = useState(false);

  const ModalInstance = (
    <Modal
      {...props}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    />
  );

  return [ModalInstance, setOpen] as const;
};

export default Modal;
