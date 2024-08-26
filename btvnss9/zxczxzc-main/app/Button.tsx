import React from "react";
import { Button as ShadcnButton } from "shadcn-ui";

type ButtonProps = {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "large";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "large",
  onClick,
  children,
}) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-black",
    destructive: "bg-red-500 text-white",
  };

  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    large: "py-3 px-6 text-lg",
  };

  const classes = `${variantClasses[variant]} ${sizeClasses[size]} rounded`;

  return (
    <ShadcnButton className={classes} onClick={onClick}>
      {children}
    </ShadcnButton>
  );
};

export default Button;
