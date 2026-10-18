"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = (value: number) => value * value * (3 - 2 * value);
const sceneSelector = "[data-scroll-scene], [data-scroll-reveal], [data-scroll-color]";

/** One frame loop for smooth scroll, visible scenes and pointer interactions. */
export function MotionDirector() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const scenes = new Set<HTMLElement>();
    const visibleScenes = new Set<HTMLElement>();
    let needsUpdate = true;
    let frame = 0;
    let viewportHeight = window.innerHeight;
    let pointerScene: HTMLElement | null = null;
    let pointerBounds: DOMRect | null = null;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;
    let magnetic: HTMLElement | null = null;
    let magneticBounds: DOMRect | null = null;
    let magneticX = 0;
    let magneticY = 0;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -100 },
      stopInertiaOnNavigate: true,
      prevent: (element) => element.hasAttribute("data-lenis-prevent"),
    });

    const markDirty = () => { needsUpdate = true; };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleScenes.add(element);
        else {
          visibleScenes.delete(element);
          if (element.hasAttribute("data-scroll-reveal")) element.style.setProperty("--reveal", "0");
        }
      }
      markDirty();
    }, { rootMargin: "20% 0px 20%" });

    const discover = (scope: ParentNode) => {
      const candidates = Array.from(scope.querySelectorAll<HTMLElement>(sceneSelector));
      if (scope instanceof HTMLElement && scope.matches(sceneSelector)) candidates.push(scope);
      for (const element of candidates) {
        if (scenes.has(element)) continue;
        scenes.add(element);
        observer.observe(element);
      }
      markDirty();
    };

    const resetMagnetic = () => {
      magnetic?.style.removeProperty("translate");
      magnetic?.removeAttribute("data-magnet-active");
      magnetic = null;
      magneticBounds = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target : null;
      const nextScene = target?.closest<HTMLElement>("[data-pointer-scene]") ?? null;
      if (nextScene !== pointerScene) {
        pointerScene?.style.setProperty("--pointer-x", "0");
        pointerScene?.style.setProperty("--pointer-y", "0");
        pointerScene = nextScene;
        pointerBounds = nextScene?.getBoundingClientRect() ?? null;
        currentX = 0;
        currentY = 0;
      }
      if (pointerScene) {
        pointerBounds ??= pointerScene.getBoundingClientRect();
        pointerX = clamp((event.clientX - pointerBounds.left) / pointerBounds.width * 2 - 1, -1, 1);
        pointerY = clamp((event.clientY - pointerBounds.top) / pointerBounds.height * 2 - 1, -1, 1);
      }

      const control = target?.closest<HTMLElement>(
        '.bft-site button:not(:disabled), .bft-site a[class*="rounded-full"], .bft-site [data-magnetic]',
      ) ?? null;
      if (control !== magnetic) {
        resetMagnetic();
        magnetic = control;
        magneticBounds = control?.getBoundingClientRect() ?? null;
        control?.setAttribute("data-magnet-active", "");
      }
      if (magnetic && magneticBounds) {
        magneticX = clamp((event.clientX - magneticBounds.left - magneticBounds.width / 2) * 0.22, -11, 11);
        magneticY = clamp((event.clientY - magneticBounds.top - magneticBounds.height / 2) * 0.22, -9, 9);
      }
    };

    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      resetMagnetic();
    };

    const onScroll = () => {
      pointerBounds = null;
      resetMagnetic();
      markDirty();
    };

    const updateScenes = () => {
      const scroll = window.scrollY;
      // Read geometry first; CSS writes below never cause interleaved layout reads.
      const measurements = Array.from(visibleScenes).filter((element) => element.isConnected).map((element) => ({
        element,
        rect: element.getBoundingClientRect(),
      }));
      const scrollLimit = Math.max(1, document.documentElement.scrollHeight - viewportHeight);

      root.style.setProperty("--header-progress", clamp(scroll / 160).toFixed(4));
      root.style.setProperty("--page-progress", (scroll / scrollLimit).toFixed(4));

      for (const { element, rect } of measurements) {
        if (element.hasAttribute("data-scroll-reveal")) {
          const range = Math.min(viewportHeight * 0.22, Math.max(100, rect.height * 0.55));
          const stagger = { none: 0, short: 18, medium: 36, long: 54 }[element.dataset.revealDelay ?? "none"] ?? 0;
          const enter = clamp((viewportHeight * 0.96 - rect.top - stagger) / range);
          const leave = clamp((rect.bottom - viewportHeight * 0.025) / Math.min(range, 120));
          const progress = reducedMotion.matches || element.matches(":focus-within") ? 1 : ease(Math.min(enter, leave));
          element.style.setProperty("--reveal", progress.toFixed(4));
        }
        if (element.hasAttribute("data-scroll-color")) {
          const progress = reducedMotion.matches ? 1 : clamp((viewportHeight * 0.84 - rect.top) / (viewportHeight * 0.52 + rect.height * 0.25));
          const letters = element.querySelectorAll<HTMLElement>("[data-color-letter]");
          letters.forEach((letter, index) => {
            letter.style.setProperty("--letter-fill", clamp(progress * 1.22 * letters.length - index).toFixed(3));
          });
        }
        if (element.hasAttribute("data-scroll-scene")) {
          const isHero = element.dataset.scrollScene === "hero";
          const progress = isHero ? clamp(-rect.top / Math.max(1, rect.height)) : clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));
          element.style.setProperty("--scene-progress", reducedMotion.matches ? "0" : progress.toFixed(4));
          element.style.setProperty("--wave-shift", reducedMotion.matches ? "0px" : `${(progress * (isHero ? 240 : 340)).toFixed(2)}px`);
          element.style.setProperty("--wave-lift", reducedMotion.matches ? "0px" : `${(Math.sin(progress * Math.PI) * (isHero ? 24 : 32)).toFixed(2)}px`);
        }
      }
    };

    const tick = (time: number) => {
      lenis.raf(time);
      if (needsUpdate) {
        updateScenes();
        needsUpdate = false;
      }
      if (pointerScene && !reducedMotion.matches) {
        currentX += (pointerX - currentX) * 0.075;
        currentY += (pointerY - currentY) * 0.075;
        if (Math.abs(pointerX - currentX) + Math.abs(pointerY - currentY) > 0.0005) {
          pointerScene.style.setProperty("--pointer-x", currentX.toFixed(4));
          pointerScene.style.setProperty("--pointer-y", currentY.toFixed(4));
        }
      }
      if (magnetic && !reducedMotion.matches) magnetic.style.translate = `${magneticX.toFixed(2)}px ${magneticY.toFixed(2)}px`;
      frame = window.requestAnimationFrame(tick);
    };

    const syncScrollLock = () => {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
      markDirty();
    };
    const lockObserver = new MutationObserver(syncScrollLock);
    lockObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) discover(node);
      }
      for (const element of scenes) if (!element.isConnected) {
        observer.unobserve(element);
        scenes.delete(element);
        visibleScenes.delete(element);
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    const resizeObserver = new ResizeObserver(() => {
      viewportHeight = window.innerHeight;
      pointerBounds = null;
      markDirty();
    });
    resizeObserver.observe(document.body);

    const onVisibility = () => {
      window.cancelAnimationFrame(frame);
      if (!document.hidden) {
        markDirty();
        frame = window.requestAnimationFrame(tick);
      }
    };
    discover(document);
    syncScrollLock();
    root.dataset.motionReady = "true";
    lenis.on("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", resetPointer);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", markDirty);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      resetMagnetic();
      lenis.destroy();
      observer.disconnect();
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      lockObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", markDirty);
      delete root.dataset.motionReady;
    };
  }, [pathname]);

  return null;
}
