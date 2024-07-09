import * as React from "react";
import { cn } from "../../util/libs";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"; 

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background !px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            type === "password" ? "pr-10" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-3 flex items-center justify-center h-6 w-6 text-muted-foreground"
          >
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
