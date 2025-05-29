import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

// Utility to filter out motion-specific props
const filterMotionProps = (props: any) => {
  const {
    animate,
    initial,
    exit,
    variants,
    whileHover,
    whileTap,
    whileFocus,
    whileInView,
    viewport,
    transition,
    ...rest
  } = props;
  return rest;
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden relative",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background border border-foreground hover:bg-transparent hover:text-foreground",
        secondary: "bg-secondary text-background border border-secondary hover:bg-transparent hover:text-secondary",
        outlined: "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background",
        text: "bg-transparent text-foreground border-none px-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all hover:after:w-full",
      },
      size: {
        default: "h-10 px-6 py-3 text-base",
        sm: "h-8 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-4 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "asChild" | "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
          {...filterMotionProps(props)}
        >
          {children}
        </Slot>
      );
    }
    
    // Filter out React animation events that conflict with Framer Motion
    const {
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...motionProps
    } = props;
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
