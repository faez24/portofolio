"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  let hiddenClass = "opacity-0 ";
  if (animation === "fade-up") hiddenClass += "translate-y-12";
  if (animation === "fade-left") hiddenClass += "translate-x-12";
  if (animation === "fade-right") hiddenClass += "-translate-x-12";

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : hiddenClass} print:opacity-100 print:translate-y-0 print:translate-x-0`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // easeOutQuad
      }}
    >
      {children}
    </div>
  );
}
