"use client";

import { useEffect, useRef } from "react";

// राजकमल's five letters, flattened to paths (from the brand SVG export) so they can be
// recolored and blurred freely instead of depending on a font being loaded.
const letterShapes = [
  { viewBox: "0 0 13 11", d: "M13.0078 1.59375H11.415V10.3203H9.45703V4.66309H7.88086C7.59352 4.66309 7.34481 4.65753 7.13477 4.64648C6.99594 4.63918 6.87859 4.62536 6.7832 4.6084C7.0114 4.80723 7.21156 5.01845 7.38281 5.24316C7.73672 5.69661 7.91402 6.22214 7.91406 6.81934C7.91406 7.32807 7.7921 7.75936 7.54883 8.11328C7.31656 8.46721 7.00167 8.73318 6.60352 8.91016C6.21646 9.0871 5.77399 9.17575 5.27637 9.17578C4.78983 9.17578 4.32513 9.08703 3.88281 8.91016C3.44038 8.73318 3.01375 8.44507 2.60449 8.04688C2.20644 7.63767 1.82485 7.09539 1.45996 6.4209C1.09502 5.73519 0.735716 4.88916 0.381836 3.88281L2.02441 3.28516C2.33412 4.22532 2.64342 5.01113 2.95312 5.6416C3.27389 6.27207 3.60633 6.74759 3.94922 7.06836C4.29204 7.38899 4.64581 7.5498 5.01074 7.5498C5.30917 7.54978 5.54671 7.47205 5.72363 7.31738C5.91167 7.16253 6.00586 6.90212 6.00586 6.53711C6.00577 6.11701 5.8626 5.72977 5.5752 5.37598C5.28761 5.01097 4.91085 4.6795 4.44629 4.38086L4.97754 3.10352H9.45703V1.59375H0V0H13.0078V1.59375Z" },
  { viewBox: "0 0 14 11", d: "M13.6211 1.59375H8.22949V4.26855C8.4209 4.12428 8.63567 4.00022 8.87598 3.89941C9.22993 3.75562 9.62885 3.68359 10.0713 3.68359C10.9117 3.68365 11.5694 3.93303 12.0449 4.43066C12.5315 4.91726 12.7753 5.59156 12.7754 6.4541C12.7754 7.00705 12.67 7.55479 12.46 8.09668C12.2609 8.62751 11.9237 9.1808 11.4482 9.75586L9.75586 8.79395C10.0875 8.42909 10.3471 8.06408 10.5352 7.69922C10.7343 7.32315 10.834 6.91314 10.834 6.4707C10.8339 6.07273 10.7397 5.77422 10.5518 5.5752C10.3638 5.36519 10.0986 5.25979 9.75586 5.25977C9.42403 5.25977 9.11376 5.36504 8.82617 5.5752C8.58354 5.74996 8.38694 5.97372 8.22949 6.24219V10.3203H6.28809V7.94531C6.18578 8.01586 6.08127 8.08382 5.97266 8.14648C5.69619 8.3013 5.38675 8.42324 5.04395 8.51172C4.71225 8.60017 4.35277 8.6445 3.96582 8.64453C3.33545 8.64453 2.76558 8.53365 2.25684 8.3125C1.75909 8.08022 1.36571 7.74876 1.07812 7.31738C0.790587 6.87498 0.647471 6.33287 0.647461 5.69141C0.647461 4.76229 0.95676 4.04298 1.57617 3.53418C2.1955 3.02551 3.05823 2.77154 4.16406 2.77148C4.45165 2.77148 4.72868 2.78811 4.99414 2.82129C5.25944 2.8434 5.51363 2.88224 5.75684 2.9375L5.59082 4.53027C5.41399 4.48609 5.22069 4.45277 5.01074 4.43066C4.80058 4.40854 4.5845 4.39746 4.36328 4.39746C3.7993 4.3975 3.36239 4.51385 3.05273 4.74609C2.75427 4.97836 2.60449 5.30997 2.60449 5.74121C2.60451 6.17244 2.74316 6.49853 3.01953 6.71973C3.29596 6.92981 3.64987 7.03509 4.08105 7.03516C4.60092 7.03516 5.07187 6.8911 5.49219 6.60352C5.81724 6.38105 6.08215 6.135 6.28809 5.86621V1.59375H0V0H13.6211V1.59375Z" },
  { viewBox: "0 0 11 11", d: "M10.7178 1.59375H9.125V10.3203H7.16797V6.52051H3.89941V6.91895C3.89941 7.33926 3.80522 7.64954 3.61719 7.84863C3.42916 8.03662 3.17978 8.12988 2.87012 8.12988C2.62696 8.12984 2.36711 8.05309 2.09082 7.89844C1.82536 7.74358 1.57603 7.54966 1.34375 7.31738C1.11148 7.07405 0.924059 6.81916 0.780273 6.55371C0.636541 6.27727 0.564476 6.01769 0.564453 5.77441C0.564453 5.54219 0.646663 5.34265 0.8125 5.17676C0.978414 4.99978 1.28869 4.91113 1.74219 4.91113L1.94141 4.92773V1.59375H0V0H10.7178V1.59375ZM3.89941 4.91113H7.16797V1.59375H3.89941V4.91113Z" },
  { viewBox: "0 0 13 11", d: "M12.1113 1.59375H10.502V10.3203H8.56152V4.83105C8.53384 4.83044 8.5062 4.82813 8.47852 4.82812C8.14669 4.82812 7.85303 4.91123 7.59863 5.07715C7.34424 5.232 7.12912 5.49243 6.95215 5.85742C6.78624 6.22243 6.6588 6.7035 6.57031 7.30078L4.69531 6.83594C4.77015 6.22011 4.91246 5.68366 5.12207 5.22656C5.04909 5.17302 4.97399 5.12206 4.89453 5.07715C4.65121 4.92233 4.35195 4.84473 3.99805 4.84473C3.55586 4.84482 3.20743 4.97782 2.95312 5.24316C2.70978 5.49757 2.58789 5.84108 2.58789 6.27246C2.588 6.81428 2.79854 7.31224 3.21875 7.76562C3.65014 8.20801 4.35849 8.6892 5.34277 9.20898L4.28027 10.6523C3.15214 10.0661 2.26194 9.40772 1.60938 8.67773C0.967931 7.93674 0.647535 7.0852 0.647461 6.12305C0.647461 5.16076 0.934613 4.44144 1.50977 3.96582C2.08493 3.47914 2.81532 3.23535 3.7002 3.23535C4.27523 3.23539 4.77312 3.33512 5.19336 3.53418C5.48678 3.66961 5.75655 3.84175 6.00391 4.04883C6.62744 3.52856 7.42513 3.26855 8.39551 3.26855C8.4502 3.26856 8.50548 3.27238 8.56152 3.27441V1.59375H0V0H12.1113V1.59375Z" },
  { viewBox: "0 0 12 11", d: "M11.8418 0V1.59375H10.249V10.3203H8.30762V1.59375H5.84766C5.89522 1.73984 5.9375 1.88872 5.97266 2.04102C6.03902 2.3286 6.07227 2.66658 6.07227 3.05371C6.07221 3.62871 5.95031 4.13774 5.70703 4.58008C5.46371 5.01127 5.12099 5.38735 4.67871 5.70801C4.29234 5.97846 3.84528 6.21109 3.34082 6.41406C3.60066 6.68037 3.8682 6.95512 4.14746 7.23438C4.52353 7.58832 4.91692 7.94195 5.32617 8.2959C5.74647 8.64983 6.17216 9.00446 6.60352 9.3584L5.24316 10.6191C4.35829 9.85594 3.58912 9.14217 2.93652 8.47852C2.29506 7.81492 1.76957 7.1897 1.36035 6.60352C1.09506 6.23871 0.901916 5.91246 0.780273 5.625C0.658603 5.33742 0.597656 5.06038 0.597656 4.79492C0.597759 4.48557 0.696678 4.23674 0.895508 4.04883C1.0946 3.84973 1.3661 3.75 1.70898 3.75C2.06284 3.75001 2.39446 3.86091 2.7041 4.08203C2.85796 4.19193 3.01451 4.32396 3.17383 4.47754C3.42371 4.32604 3.62207 4.15634 3.7666 3.96582C4.00981 3.64514 4.13082 3.25245 4.13086 2.78809C4.13086 2.46732 4.09207 2.16258 4.01465 1.875C3.98805 1.77246 3.95533 1.67933 3.9209 1.59375H0V0H11.8418Z" },
];

/** Deterministic pseudo-random in [0, 1), seeded by index so server and client render identically. */
function rnd(seed: number) {
  const x = Math.sin(seed * 999.37) * 10000;
  return x - Math.floor(x);
}

/** Fixed to 3 decimals so the string is identical on server and client, regardless of
 * how each environment would otherwise format the raw float. */
const r = (n: number) => Number(n.toFixed(3));

// Discrete size tiers in a 1:3:5:7:9 ratio (cqw units), scaled up for presence, cycled
// across letters for variety. cqw is relative to the viewport-wide wrapper below, so this
// stays just as large (proportionally) on a phone screen as on desktop.
const sizeTiers = [1.6, 4.8, 8, 11.2, 14.4];

const count = 64;
const ambientLetters = Array.from({ length: count }, (_, i) => {
  const axis: "x" | "y" = i % 2 === 0 ? "x" : "y";
  // Stratify cross-axis position by slot (rather than pure random) so travelers on the
  // same axis start spread apart into their own lane instead of clustering onto one line.
  const slot = Math.floor(i / 2);
  const slotCount = Math.ceil(count / 2);
  const spread = 100 / slotCount;
  const cross = r(spread * slot + spread * 0.2 + rnd(i * 1.3 + 3) * spread * 0.6);
  // Wiggle amplitude is capped well under half a lane's width, so a letter's perpendicular
  // weave can never cross into a neighboring lane and collide with another same-axis letter.
  const maxWiggle = spread * 0.32;
  const wiggle = maxWiggle * (0.5 + rnd(i * 5.1 + 11) * 0.5);
  const wSign = rnd(i * 6.7 + 12) > 0.5 ? 1 : -1;
  const tier = sizeTiers[i % sizeTiers.length];
  return {
    shape: letterShapes[i % letterShapes.length],
    axis,
    // The cross-axis position is fixed; the travel axis sweeps edge to edge via keyframes.
    cross,
    size: r(tier * (0.92 + rnd(i * 4.1 + 5) * 0.16)),
    opacity: r(0.12 + rnd(i * 6.3 + 6) * 0.2),
    // Proportional to the letter's own size, but with a floor: at the reduced 3.75%
    // ratio a small letter's blur radius rounds to a sub-pixel value the browser can't
    // actually render, so it read as sharp/unblurred next to the bigger letters.
    blur: r(Math.max(0.3, tier * (0.92 + rnd(i * 4.1 + 5) * 0.16) * 0.05)),
    rotation: r(-70 + rnd(i * 2.3 + 8) * 140),
    duration: r(20 + rnd(i * 8.7 + 9) * 30),
    delay: r(-rnd(i * 9.1 + 10) * 45),
    w1: r(wSign * wiggle),
    w2: r(-wSign * wiggle * (0.6 + rnd(i * 3.3 + 13) * 0.6)),
    w3: r(wSign * wiggle * (0.7 + rnd(i * 4.7 + 14) * 0.5)),
    w4: r(-wSign * wiggle * (0.5 + rnd(i * 5.9 + 15) * 0.6)),
  };
});

// The cursor's pull reaches every letter on the page (huge radius), fading with distance
// but never fully cutting off, so all of them lean toward it at once, magnet-style.
const PULL_RADIUS = 3000;
const MAGNET_STRENGTH = 46;
// Letters push apart from each other so the pull toward the cursor never bunches them
// into a touch/overlap; this is what keeps the "cluster" looking like separate letters,
// with a clear gap kept between every pair at all times.
const REPEL_PADDING = 26;
const REPEL_STRENGTH = 1.6;

/** Ambient field of blurred राजकमल letters sweeping edge to edge across the whole page,
 * responsive at any viewport size since every measurement is a percentage or cqw unit. */
export function AmbientLetters() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mouse = { x: -9999, y: -9999, active: false };
    const offsets = ambientLetters.map(() => ({ x: 0, y: 0 }));
    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    const tick = () => {
      const els = letterRefs.current;
      const n = els.length;
      const centers: { x: number; y: number; w: number; h: number }[] = new Array(n);
      for (let i = 0; i < n; i++) {
        const el = els[i];
        if (!el) { centers[i] = { x: 0, y: 0, w: 0, h: 0 }; continue; }
        const rect = el.getBoundingClientRect();
        centers[i] = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: rect.width, h: rect.height };
      }

      const targets = centers.map(c => {
        if (!mouse.active) return { x: 0, y: 0 };
        const dx = mouse.x - c.x;
        const dy = mouse.y - c.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 0.01) return { x: 0, y: 0 };
        const pull = Math.max(0, 1 - dist / PULL_RADIUS);
        const strength = pull * MAGNET_STRENGTH;
        return { x: (dx / dist) * strength, y: (dy / dist) * strength };
      });

      // Pairwise repulsion so pulled-together letters never overlap.
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (!els[i] || !els[j]) continue;
          const a = centers[i];
          const b = centers[j];
          const dx = (b.x + offsets[j].x) - (a.x + offsets[i].x);
          const dy = (b.y + offsets[j].y) - (a.y + offsets[i].y);
          const dist = Math.hypot(dx, dy);
          const minDist = (a.w + b.w) / 2 * 0.7 + REPEL_PADDING;
          if (dist > 0.01 && dist < minDist) {
            const push = ((minDist - dist) / minDist) * REPEL_STRENGTH * 30;
            const ux = dx / dist;
            const uy = dy / dist;
            targets[i].x -= ux * push;
            targets[i].y -= uy * push;
            targets[j].x += ux * push;
            targets[j].y += uy * push;
          }
        }
      }

      for (let i = 0; i < n; i++) {
        const el = els[i];
        if (!el) continue;
        const offset = offsets[i];
        offset.x += (targets[i].x - offset.x) * 0.12;
        offset.y += (targets[i].y - offset.y) * 0.12;
        el.style.translate = `${offset.x.toFixed(2)}px ${offset.y.toFixed(2)}px`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-y-0 left-[calc(50%-50vw)] z-0 w-screen overflow-clip [container-type:inline-size]" aria-hidden="true">
      {ambientLetters.map((letter, i) => (
        <span
          key={i}
          ref={el => { letterRefs.current[i] = el; }}
          className="absolute block text-[#ad733a] will-change-transform motion-reduce:animate-none"
          style={{
            top: letter.axis === "x" ? `${letter.cross}%` : undefined,
            left: letter.axis === "y" ? `${letter.cross}%` : undefined,
            width: `${letter.size}cqw`,
            opacity: letter.opacity,
            filter: `blur(${letter.blur}cqw)`,
            animation: `${letter.axis === "x" ? "drift-x" : "drift-y"} ${letter.duration}s linear infinite`,
            animationDelay: `${letter.delay}s`,
            ["--rot" as string]: `${letter.rotation}deg`,
            ["--w1" as string]: `${letter.w1}cqw`,
            ["--w2" as string]: `${letter.w2}cqw`,
            ["--w3" as string]: `${letter.w3}cqw`,
            ["--w4" as string]: `${letter.w4}cqw`,
          }}
        >
          <svg viewBox={letter.shape.viewBox} fill="currentColor" className="block w-full" aria-hidden="true">
            <path d={letter.shape.d} />
          </svg>
        </span>
      ))}
    </div>
  );
}
