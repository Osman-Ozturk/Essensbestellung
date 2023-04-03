import React from "react";

const Title = ({ children, addClass }) => {
  return <div className={`${addClass} font-dancing font-bold text-white text-3xl`}>{children}</div>;
};

export default Title;