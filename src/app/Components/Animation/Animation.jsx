"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapScrollWrapper({
  children,
  animation = "fadeUp",   // "fadeUp" | "fadeLeft" | "fadeRight" | "fadeDown" | "zoom" | "rotate"
  once = true,            // play only once when entering viewport
  start = "top 85%",      // ScrollTrigger start
  stagger = 0.12,         // stagger for child animations
  selector = "[data-animate]", // child selector to animate (default: elements with data-animate)
  className = "",
  debug = false,          // show ScrollTrigger markers (set true to debug)
  duration = 1.0
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // guard SSR

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = ref.current;
      if (!container) return;

      const targets = Array.from(container.querySelectorAll(selector));
      const hasChildren = targets.length > 0;

      const base = { duration, ease: "power3.out", opacity: 0 };

      const animFrom = (() => {
        switch (animation) {
          case "fadeLeft":  return { x: -60, ...base };
          case "fadeRight": return { x: 60,  ...base };
          case "fadeDown":  return { y: -60, ...base };
          case "zoom":      return { scale: 0.85, ...base };
          case "rotate":    return { rotation: 8, scale: 0.95, ...base };
          case "fadeUp":
          default:          return { y: 60, ...base };
        }
      })();

      const triggerOpts = {
        trigger: container,
        start,
        toggleActions: once
          ? "play none none none"   // play only once
          : "play reverse play reverse", // replay when scrolling up/down
        once,                       // 👈 this is the important fix
        markers: debug,
      };

      if (hasChildren) {
        gsap.from(targets, {
          ...animFrom,
          stagger,
          scrollTrigger: triggerOpts,
        });
      } else {
        gsap.from(container, {
          ...animFrom,
          scrollTrigger: triggerOpts,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [animation, once, start, stagger, selector, debug, duration]);

  return <div ref={ref} className={className}>{children}</div>;
}
