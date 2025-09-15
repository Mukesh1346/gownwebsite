"use client";
import { useEffect, useRef, useState } from "react";

export default function CountOnView({
  end,
  duration = 1500,
  start = 0,
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();

            const step = (t) => {
              const elapsed = t - t0;
              const progress = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = start + (end - start) * eased;

              setValue(Math.floor(current));

              if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
              } else {
                setValue(end);
              }
            };

            rafRef.current = requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(node);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, start]);

  return (
    <div ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}
