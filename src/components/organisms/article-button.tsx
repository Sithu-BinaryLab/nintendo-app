// components/AnimatedButton.tsx
import { MouseEventHandler } from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "yellow" | "blue" | "purple" | "pink" | "red";
  icon?: boolean;
  pulse?: boolean;
  bounce?: boolean;
  notification?: boolean;
};

export default function AnimatedButton({
  text,
  href = "#",
  onClick,
  variant = "blue",
  icon = false,
  pulse = false,
  bounce = false,
  notification = false,
}: ButtonProps) {
  // Variant styles
  const variantStyles = {
    yellow: "bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full",
    red: "bg-gradient-to-br from-red-400 to-red-600 rounded-xl",
    blue: "bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl",
    purple: "bg-purple-600 rounded-xl",
    pink: "bg-pink-600 rounded-2xl",
  };

  // Animation classes
  const animationClasses = [
    pulse ? "animate-pulse" : "",
    bounce ? "animate-bounce" : "",
  ].join(" ");

  const ButtonContent = (
    <div
      className={`button-container group relative h-11 w-35 mx-auto ml-auto flex justify-center items-center ${animationClasses}`}
    >
      <div
        className={`i absolute h-11 w-35 shadow-2xl cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:scale-x-110 hover:scale-y-105 ${variantStyles[variant]}`}
      />

      <span className="button-text relative z-10 text-white font-semibold pointer-events-none flex items-center">
        {icon && (
          <svg
            className="arrow-icon w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {text}
      </span>

      {notification && (
        <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
          <span className="absolute inline-flex rounded-full h-6 w-6 bg-purple-500" />
        </span>
      )}
    </div>
  );

  return (
    <Link
      href={href}
      onClick={onClick}
      className="block ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
    >
      {ButtonContent}
    </Link>
  );
}
