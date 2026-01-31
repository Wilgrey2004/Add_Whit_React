import { useState, useEffect } from "react";

export function CarouselDefault({ UrlList = [], interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const total = UrlList.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [total, interval]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative md:w-2/3 md:h-min  mx-auto">
      <img
        src={UrlList[current]}
        alt={`image ${current}`}
        className="w-full h-64 object-cover rounded-xl transition-all duration-500"
      />

      <button
        onClick={prev}
        className="hidden md:absolute md:block left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="hidden md:absolute md:block right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
