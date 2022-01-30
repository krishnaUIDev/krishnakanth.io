import React from "react";
import simpleIcons from "simple-icons";

interface IconProps {
  type: string;
  style?: object;
}

const Icon = ({ type, style }: IconProps) => {
  const icon = simpleIcons.get(type);

  return (
    <div
      data-icon={icon}
      style={{
        fill: `#${icon.hex}`,
        display: "inline-block",
        width: "50px",
        margin: "0 auto",
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

export default Icon;
