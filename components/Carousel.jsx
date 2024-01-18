import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false, // Disable server-side rendering
});

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div className="w-full lg:w-1/3 mx-auto" style={{ height: props.height }}>
      <DynamicCarousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
