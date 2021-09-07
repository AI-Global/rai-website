/**
 * Disabling no-unresolved as eslint is struggling
 * to find the swiper module.
 */
/* eslint-disable import/no-unresolved */
import React, { MutableRefObject, ReactNode, useRef } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon, IconType } from "@/components/Icon";

import styles from "./Slider.module.css";

import "swiper/css";
import "swiper/css/autoplay";

interface SliderProps {
  readonly slides: ReactNode[];
}

export function Slider({ slides }: SliderProps) {
  const swiperRef = useRef<MutableRefObject<Swiper>>(null);
  const defaultProps = {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 7000,
    },
    slidesPerView: 1,
    breakpoints: {
      /**
       * Swiper is mobile first, so this is when the window width
       * is >= the breakpoint number.
       */
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  };

  return (
    <>
      <Swiper
        // @ts-expect-error Type error
        ref={swiperRef}
        {...defaultProps}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={Math.random()}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttons}>
        <SliderButton onClick={() => navigate("prev")} icon="ChevronLeft" />
        <SliderButton onClick={() => navigate("next")} icon="ChevronRight" />
      </div>
    </>
  );

  function navigate(direction: "prev" | "next") {
    if (!swiperRef?.current) {
      return;
    }

    /**
     * This is a typing error on swipers side. The ref
     * is currently working and the `swiper` is available
     * on the ref.
     */
    // @ts-expect-error Type error
    const { swiper } = swiperRef.current;

    if (direction === "next") {
      swiper.slideNext();
    }

    if (direction === "prev") {
      swiper.slidePrev();
    }
  }
}

interface SliderButtonProps {
  readonly icon: IconType;
  onClick(): void;
}

function SliderButton({ onClick, icon }: SliderButtonProps) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <Icon icon={icon} size="large" />
    </button>
  );
}
