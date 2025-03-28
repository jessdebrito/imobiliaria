import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(
          `w-auto rounded-full border-transparent px-5 py-3 disabled:opacity-50 text-white hover:text-[var(--color-primary)] font-semibold cursor-pointer ${className}`
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
