import type { Theme } from '@mui/material';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useRef } from 'react';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import VButton from '@/components/buttons/VButton';
import VLinkButton from '@/components/buttons/VLinkButton';

import type { StandartSliderItemProps } from './StandartSliderItem';
import StandartSliderItem from './StandartSliderItem';

type Slide = StandartSliderItemProps & { id: number };

type StandartSliderProps = {
    slides: Slide[] | any;
    href: string;
};

const StandartSlider: React.FC<StandartSliderProps> = ({ slides, href }) => {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    const sliderRef = useRef<null | SwiperRef>(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <Box>
            <Swiper
                ref={sliderRef}
                slidesPerView={1}
                spaceBetween={40}
                breakpoints={{
                    [breakpoints.values.sm]: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
            >
                {slides.map((slide:any) => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <StandartSliderItem {...slide} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={4}
            >
                {((isMobile && slides.length > 1) ||
                    (!isMobile && slides.length > 2)) && (
                    <Stack direction="row" spacing={1.5}>
                        <VButton
                            onClick={handlePrev}
                            startIconName="rightArrow"
                            variant="outlined"
                            color="black"
                            aria-label="Previous slide"
                            sx={{
                                width: 45,
                                height: 45,
                                backgroundColor: 'white.main',
                                '&:hover': {
                                    backgroundColor: 'white.main',
                                },
                                '& span': {
                                    margin: 0,
                                },
                            }}
                        />

                        <VButton
                            onClick={handleNext}
                            endIconName="rightArrow"
                            variant="outlined"
                            color="black"
                            aria-label="Next slide"
                            sx={{
                                width: 45,
                                height: 45,
                                backgroundColor: 'white.main',
                                '&:hover': {
                                    backgroundColor: 'white.main',
                                },
                                '& span': {
                                    margin: 0,
                                },
                            }}
                        />
                    </Stack>
                )}

                <VLinkButton href={href} endIconName="rightArrow" color="black">
                    Tümünü Gör
                </VLinkButton>
            </Stack>
        </Box>
    );
};

export default StandartSlider;
