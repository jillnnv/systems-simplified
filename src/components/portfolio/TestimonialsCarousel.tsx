import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = { quote: string; name: string; title: string };

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {items.map((t) => (
            <div
              key={t.name}
              className="pl-6 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <figure className="h-full rounded-3xl bg-white border border-black/[0.04] p-9 md:p-10 shadow-[0_18px_50px_-30px_rgba(247,123,49,0.25)] flex flex-col">
                <Quote
                  size={40}
                  className="mb-6"
                  style={{ color: "#f77b31" }}
                  strokeWidth={1.75}
                />
                <blockquote className="text-[var(--ink)] leading-relaxed text-[17px] md:text-[18px] font-medium flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-black/5">
                  <div className="font-semibold text-[var(--ink)]">{t.name}</div>
                  <div className="text-sm text-[var(--ink-soft)] mt-0.5">{t.title}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous"
          className="w-11 h-11 rounded-full bg-white border border-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] flex items-center justify-center text-[var(--ink-soft)] hover:text-white hover:bg-[#f77b31] hover:border-transparent transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === selected ? 24 : 8,
                background: i === selected ? "#f77b31" : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next"
          className="w-11 h-11 rounded-full bg-white border border-black/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] flex items-center justify-center text-[var(--ink-soft)] hover:text-white hover:bg-[#f77b31] hover:border-transparent transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
