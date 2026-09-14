"use client";

import { useEffect, useRef } from "react";

const letters = [
  { text: "रा", x: -0.12, y: -0.16, rotation: -35 },
  { text: "ज", x: 0.12, y: 0.35, rotation: 42 },
  { text: "क", x: -0.22, y: 0.1, rotation: -28 },
  { text: "म", x: 0.08, y: -0.22, rotation: 32 },
  { text: "ल", x: 0.03, y: 0.42, rotation: -45 },
];

/** राजकमल starts intact, then breaks apart into a sticky decorative backdrop. */
export function ScrollBackdrop() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Movement here is a direct response to the user's own scrolling, not an
    // autoplaying animation, so it's kept on even under prefers-reduced-motion.
    let frame = 0;
    const started = performance.now();
    const paint = (now: number) => {
      if (!layer.current) return;
      const page = layer.current.closest("main");
      const distance = Math.max(window.scrollY, -(page?.getBoundingClientRect().top ?? 0), 0);
      // Word stays intact until the page actually scrolls, then breaks apart with it.
      const progress = 1 - Math.exp(-distance / 280);
      const width = layer.current.clientWidth;
      Array.from(layer.current.children).forEach((letter, index) => {
        const destination = letters[index];
        const drift = Math.sin((now - started) / 1300 + index * 1.7) * 14 * progress;
        (letter as HTMLElement).style.transform = `translate3d(${destination.x * width * progress + drift}px, ${destination.y * window.innerHeight * progress + drift}px, 0) rotate(${destination.rotation * progress + drift * 0.25}deg)`;
      });
      frame = requestAnimationFrame(paint);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      paint(performance.now());
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else restart();
    };
    restart();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <div className="pointer-events-none absolute inset-0 z-0 overflow-clip pt-[64cqw] min-[600px]:pt-[48cqw]" aria-hidden="true">
    <div ref={layer} data-background-word className="sticky top-[28vh] flex justify-center text-[20cqw] leading-[1.4] font-extrabold text-[#965714]/65">
      {letters.map(letter => <span key={letter.text} data-background-letter className="block shrink-0 will-change-transform">{letter.text}</span>)}
    </div>
  </div>;
}
