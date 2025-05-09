import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

const LazySection = ({ importFunc, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const Section = lazy(importFunc);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {inView && (
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <Section />
        </Suspense>
      )}
    </div>
  );
};

export default LazySection;
