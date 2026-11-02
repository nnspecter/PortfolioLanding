import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

// Section counts as active once its top passes this line below the viewport top.
const ACTIVE_LINE_OFFSET = 180;
// Distance from the page bottom at which the last section becomes active.
const BOTTOM_THRESHOLD = 80;

function getActiveSection(sectionIds: readonly string[]) {
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - BOTTOM_THRESHOLD;
  if (isAtBottom) return sectionIds[sectionIds.length - 1];

  const activeLine = window.scrollY + ACTIVE_LINE_OFFSET;
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i]);
    if (el && activeLine >= el.offsetTop) return sectionIds[i];
  }
  return sectionIds[0];
}

// Where scrollIntoView will land: section top minus the header offset
// (html scroll-padding-top), clamped to the bottom of the page.
function getScrollTarget(el: HTMLElement) {
  const headerOffset =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(
    0,
    Math.min(el.getBoundingClientRect().top + window.scrollY - headerOffset, maxScroll)
  );
}

/**
 * Tracks which section is in view and smoothly scrolls to a section on link click.
 * While a click-initiated scroll is running the clicked section stays active,
 * instead of highlighting every section the page passes through.
 */
export function useSectionNavigation<T extends string>(sectionIds: readonly T[]) {
  const [activeId, setActiveId] = useState<T>(sectionIds[0]);
  const navScrollTarget = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (navScrollTarget.current !== null) {
        if (Math.abs(window.scrollY - navScrollTarget.current) <= 2) {
          navScrollTarget.current = null;
        }
        return;
      }
      setActiveId(getActiveSection(sectionIds) as T);
    };

    // At most one check per frame, so scrolling stays off the main thread.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    // The click lock ends when the scroll finishes or the user takes over.
    const releaseNavLock = () => {
      navScrollTarget.current = null;
    };
    const releaseEvents = ["scrollend", "wheel", "touchstart", "keydown"] as const;

    window.addEventListener("scroll", onScroll, { passive: true });
    releaseEvents.forEach((type) =>
      window.addEventListener(type, releaseNavLock, { passive: true })
    );
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      releaseEvents.forEach((type) => window.removeEventListener(type, releaseNavLock));
    };
  }, [sectionIds]);

  const navigateTo = useCallback((event: MouseEvent<HTMLAnchorElement>, id: T) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();

    setActiveId(id);
    navScrollTarget.current = getScrollTarget(el);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  return { activeId, navigateTo };
}
