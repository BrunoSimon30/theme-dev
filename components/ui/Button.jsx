import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  [
    "border",
    "rounded-none",
    "max-w-max",
    "font-semibold",
    "cursor-pointer",
    "transition-all",
    "duration-300",
    "ease-in-out",
    'relative',
    "overflow-hidden",
    "z-10",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-secondary-green",
          "text-black",
          "border-secondary-green",
          "hover:bg-secondary",
          "hover:border-secondary",
        ],
        secondary: [
          "bg-primary-dark",
          "text-white",
          "border-primary-dark",
          "hover:opacity-90",
        ],
        outline: [
          "bg-white",
          "text-black",
          "border-black",
          "hover:bg-primary",
          "hover:border-primary",
          "hover:text-white",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-md", "py-2", "px-10"],
        large: ["text-lg", "py-3", "px-12"], // ✅ optional addition
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

const Button = ({
  title,
  className,
  subtitle,
  size,
  variant,
  isLoading = false,
  ...props
}) => {
  return (
    <div>
      <button
        type="button"
        disabled={isLoading}
        {...props}
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "opacity-70 cursor-not-allowed",
        )}
      >
        <img src="/img/home/tshape.svg" className="absolute right-2" alt="" />
        {isLoading ? "Submitting..." : title}
      </button>
      <small className="block text-center">{subtitle}</small>
    </div>
  );
};

export default Button;
