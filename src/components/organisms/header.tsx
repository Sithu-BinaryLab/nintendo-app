import React from "react";

type HeaderProps = {
  title?: string;
  className?: string;
};

const Header = ({ className, title }: HeaderProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <h1 className="text-[2.375rem] font-bold text-[#484848]">{title}</h1>
    </div>
  );
};

export default Header;
