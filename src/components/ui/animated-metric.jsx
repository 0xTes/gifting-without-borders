"use client";

import { useEffect, useState } from "react";

export default function AnimatedMetric({ countTo, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const frame = requestAnimationFrame(() => setDisplayValue(countTo));
      return () => cancelAnimationFrame(frame);
    }

    let frame;
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(countTo * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [countTo]);

  return <>{`${displayValue}${suffix}`}</>;
}
