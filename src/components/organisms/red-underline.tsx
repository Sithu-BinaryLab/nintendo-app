import React from "react";
type RedUnderlineProps = {
  text: string;
};
const RedUnderline = ({ text }: RedUnderlineProps) => {
  return <span className="text-red-500 font-bold underline">{text}</span>;
};

export default RedUnderline;
