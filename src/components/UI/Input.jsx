import React, { useId } from "react";
import { cn } from "../../utils/cn";

const inputTypeClasses = {
  checkbox:
    "h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  radio:
    "h-4 w-4 rounded-full border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
};

const Input = React.forwardRef(
  (
    {
      className,
      type = "text",
      label,
      description,
      error,
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;

    const isCheckType = type === "checkbox" || type === "radio";

    const baseInputClasses =
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    if (isCheckType) {
      return (
        <input
          type={type}
          className={cn(inputTypeClasses[type], className)}
          ref={ref}
          id={inputId}
          {...props}
        />
      );
    }

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(
            baseInputClasses,
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />

        {description && !error && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
