import {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactNode,
  isValidElement,
} from "react";

interface DisablerProps extends PropsWithChildren {
  disabled?: boolean;
}

const Disabler = ({ children, disabled }: DisablerProps) => {
  return (
    <>
      {children &&
        (disabled
          ? Children.map(children, (child: ReactNode) =>
              isValidElement(child)
                ? cloneElement(child, { disabled } as DisablerProps)
                : child
            )
          : children)}
    </>
  );
};

export default Disabler;
