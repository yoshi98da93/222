import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color: colorの場合、以下のようにすることが可能
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
