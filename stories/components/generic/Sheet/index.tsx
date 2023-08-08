import { createPortal } from "react-dom";

const Sheet = () => {
  return createPortal(
    <div id="sheet">
      <h1>안녕</h1>
    </div>,
    document.body
  );
};

export default Sheet;
