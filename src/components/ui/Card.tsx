import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  title: string;
}

export function Card({ children, className, icon, title }: CardProps) {
  return (
    <div className={cn("bg-white rounded-2xl p-8 flex flex-col h-full border border-gray-100 soft-shadow hover:shadow-lg transition-shadow duration-300", className)}>
      {icon && (
        <div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 text-2xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-[var(--color-heading)] leading-snug">{title}</h3>
      <p className="text-[#475569] leading-relaxed text-sm md:text-base">
        {children}
      </p>
    </div>
  );
}
