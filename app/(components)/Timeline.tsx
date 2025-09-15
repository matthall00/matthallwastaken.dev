"use client";
import Badge from "./Badge";
import { useRef, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TimelineItem = {
  dateRange: string;
  title: string;
  blurb: string;
  badges?: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9 * dir;
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: delta, behavior: reduce ? "auto" : "smooth" });
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollBy(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollBy(-1);
    }
  }, [scrollBy]);

  const updateControls = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanPrev(scrollLeft > 2);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateControls();
    const onScroll = () => updateControls();
    const onResize = () => updateControls();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateControls]);

  return (
    <div className="relative" aria-label="Professional timeline">
      <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-black to-transparent xl:hidden" />
      <div className="absolute inset-y-0 right-0 w-8 pointer-events-none bg-gradient-to-l from-black to-transparent xl:hidden" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" aria-hidden />

      <div
        ref={scrollerRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 -mx-4 lg:-mx-6 xl:overflow-x-visible"
      >
        <ul className="grid grid-flow-col auto-cols-[minmax(320px,380px)] gap-6 pr-8 sm:auto-cols-[minmax(340px,420px)] lg:auto-cols-[minmax(360px,440px)] xl:grid-flow-row xl:auto-cols-auto xl:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
          {items.map((item) => (
            <li key={item.title} className="snap-start">
              <article aria-label={`${item.dateRange}: ${item.title}`} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 min-h-[220px] flex flex-col">
                <div className="text-xs leading-5 text-white/60">{item.dateRange}</div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">{item.blurb}</p>
                <div className="mt-auto" />
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.badges && item.badges.length > 0 ? (
                    item.badges.map((b) => <Badge key={b}>{b}</Badge>)
                  ) : (
                    <span className="opacity-0 select-none">placeholder</span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="xl:hidden absolute -top-12 right-2 flex items-center gap-2 z-10">
        <button
          onClick={() => scrollBy(-1)}
          className={`h-9 w-9 grid place-items-center rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-sand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 transition ${
            canPrev ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll timeline left"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className={`h-9 w-9 grid place-items-center rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-sand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 transition ${
            canNext ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll timeline right"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
