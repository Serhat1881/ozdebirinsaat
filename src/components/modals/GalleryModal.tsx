import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

import { Box, Modal, useTheme } from '@mui/material';
import NextImage from 'next/image';
import React, { useState } from 'react';
import { FreeMode, Keyboard, Navigation, Thumbs } from 'swiper';
import type { SwiperClass } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Program } from '@/data/hizmetler';

type GalleryModalProps = {
    modalIndex: number;
    imageGallery: Program['imageGallery'];
    open: boolean;
    onClose: () => void;
};

const GalleryModal: React.FC<GalleryModalProps> = ({
    modalIndex,
    imageGallery,
    open,
    onClose,
}) => {
    const { breakpoints } = useTheme();

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const [activeIndex, setActiveIndex] = useState(modalIndex);

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    outline: 'none',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100vw', lg: '65vw' },
                        height: { xs: '56.25vh', lg: '60vh' },
                        '.swiper-button-next, .swiper-button-prev': {
                            color: 'primary.main',
                        },

                        '.swiper-slide': {
                            WebkitBackfaceVisibility: 'hidden',
                            WebkitTransform: 'translate3d(0,0,0)',
                        },

                        '.swiper-wrapper': {
                            WebkitTransformStyle: 'preserve-3d',
                        },
                    }}
                >
                    <Swiper
                        modules={[Navigation, Keyboard, Thumbs]}
                        keyboard
                        navigation
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null,
                        }}
                        initialSlide={modalIndex}
                        spaceBetween={30}
                        style={{
                            height: '100%',
                        }}
                        onTransitionStart={(swiper) => {
                            setActiveIndex(swiper.activeIndex);
                        }}
                    >
                        {imageGallery.map(({ image, alt }) => (
                            <SwiperSlide key={image}>
                                <NextImage
                                    src={image}
                                    alt={alt}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                        border: 'none',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: { xs: 100, md: 150 },
                        width: { xs: '100vw', lg: '65vw' },
                    }}
                >
                    <Swiper
                        modules={[FreeMode, Navigation, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        freeMode
                        watchSlidesProgress
                        breakpoints={{
                            [breakpoints.values.xs]: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },

                            [breakpoints.values.md]: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}
                        style={{ height: '100%' }}
                    >
                        {imageGallery.map(({ image, alt }, index) => (
                            <SwiperSlide key={image}>
                                <NextImage
                                    src={image}
                                    alt={alt}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        filter: `brightness(${
                                            activeIndex === index ? 0.9 : 0.4
                                        })`,
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Modal>
    );
};

export default GalleryModal;
