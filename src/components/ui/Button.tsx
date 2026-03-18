"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, variant = "primary", className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative group flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 rounded-md",
          variant === "primary" && "bg-[var(--color-accent)] text-white hover:bg-[#D62828] btn-shadow",
          variant === "secondary" && "bg-gray-100 text-[#1E293B] hover:bg-gray-200",
          variant === "dark" && "bg-[#1E293B] text-white hover:bg-[#0F172A] shadow-md",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        
        {icon && (
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center">
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
