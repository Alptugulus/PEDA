"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-blue px-5 py-2.5 text-white hover:bg-brand-blue/90",
        secondary: "bg-white px-5 py-2.5 text-slate-800 ring-1 ring-slate-200 hover:bg-slate-100",
        ghost: "px-4 py-2 text-brand-blue hover:bg-brand-blue/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
