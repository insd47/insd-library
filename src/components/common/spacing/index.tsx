import React from "react";

const Spacing: React.FC<{ flex?: number }> = ({ flex }) => {
  return <div style={{ flex: flex ?? 1 }} />;
};

export default Spacing;
