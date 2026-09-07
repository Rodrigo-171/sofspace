"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
