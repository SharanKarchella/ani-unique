import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils"; // Adjust path if needed
import React from "react";

// Define button variants with Tailwind classes
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-primary text-primary bg-transparent hover:bg-primary/10",
        ghost: "bg-transparent hover:bg-white/10 text-white",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1",
        lg: "px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define Button props interface
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string; // Optional for custom classes
}

// Button component with proper typing
export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};