"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-[80px] flex items-center">
      <div className="container px-4 md:px-8 max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Exact SW LAB Logo Recreation */}
        <Link href="/" className="flex items-center">
          <span className="text-[1.8rem] font-extrabold text-[var(--color-heading)] tracking-tight font-sans leading-none">
            SW<span className="text-[var(--color-accent)] font-medium">Lab</span>
          </span>
        </Link>

        {/* Header CTA */}
        <Button variant="dark" className="px-6 py-2.5 min-h-0 text-sm hidden md:flex" onClick={() => {
          window.dispatchEvent(new Event('open-lead-form'));
        }}>
          Вход в обучение
        </Button>
      </div>
    </header>
  );
}
