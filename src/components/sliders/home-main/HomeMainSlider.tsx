import "swiper/css";
import "swiper/css/pagination";

import { Box, Container, Stack, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import { Pagination } from "swiper";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import VButton from "@/components/buttons/VButton";
import { paginationMainSlider } from "@/helpers/sliders/pagination";
import useSwiperRef from "@/hooks/useSwiperRef";

import type { SliderItemProps } from "./SliderItem";
import HomeMainSliderItem from "./SliderItem";
import SliderPagination from "./SliderPagination";

type Slide = {
  id: number;
} & SliderItemProps;

type HomeMainSliderProps = {
  slides: Slide[];
};

const HomeMainSlider: React.FC<HomeMainSliderProps> = ({ slides }) => {
  const { breakpoints } = useTheme();

  const sliderRef = useRef<null | SwiperRef>(null);
  const [paginationEl, paginationElRef] = useSwiperRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Box position="relative">
      <Swiper
        direction="vertical"
        ref={sliderRef}
        loop
        pagination={{
          type: "custom",
          el: paginationEl,
          renderCustom(_, current, total) {
            return paginationMainSlider(current, total);
          },
        }}
        modules={[Pagination]}
        breakpoints={{
          [breakpoints.values.xs]: {
            direction: "horizontal",
          },
          [breakpoints.values.md]: {
            direction: "vertical",
          },
        }}
        style={{ height: "calc(100vh - 84px)" }}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id}>
              <HomeMainSliderItem
                title={slide.title}
                priority={index === 0}
                image={slide.image}
                description={slide.description}
                buttonHref={slide.buttonHref}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            paddingTop: { xs: 8, md: 0 },
            justifyContent: "flex-end",
          }}
        >
          <Stack
            direction={{ xs: "row", md: "column" }}
            alignItems="center"
            spacing={{ xs: 2, md: 1 }}
            paddingBottom={{ xs: 4, md: 0 }}
            zIndex={1}
            sx={{
              "& > button": {
                display: { xs: "none", md: "flex" },
              },
            }}
          >
            <VButton
              onClick={handlePrev}
              startIconName="rightArrow"
              variant="outlined"
              aria-label="Previous slide"
              sx={{
                width: 40,
                height: 40,
                "& span": {
                  margin: 0,
                },
                "& svg": {
                  transform: {
                    xs: "rotate(180deg) ",
                    md: "rotate(-90deg) !important",
                  },
                  transition: {
                    xs: "transform 0.3s",
                    md: "transform 0.3s",
                  },
                },
                "&:hover svg": {
                  transform: {
                    md: "scale(1.2) translateY(-2px) rotate(-90deg)!important",
                  },
                },
              }}
            />

            <SliderPagination ref={paginationElRef} />

            <VButton
              onClick={handleNext}
              startIconName="rightArrow"
              variant="outlined"
              aria-label="Next slide"
              sx={{
                width: 40,
                height: 40,
                "& span": {
                  margin: 0,
                },
                "& svg": {
                  transform: {
                    xs: "rotate(0)",
                    md: "rotate(90deg) !important",
                  },
                  transition: {
                    xs: "transform 0.3s",
                    md: "transform 0.3s",
                  },
                },
                "&:hover svg": {
                  transform: {
                    xs: "scale(1.2) translateX(2px) rotate(0) !important",
                    md: "scale(1.2) translateY(2px) rotate(90deg) !important",
                  },
                },
              }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeMainSlider;
