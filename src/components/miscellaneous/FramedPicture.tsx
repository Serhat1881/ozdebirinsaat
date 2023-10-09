import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import NextImage from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export type ImageProps = {
    src: string;
    alt: string;
};

type FramedPhotoCollageProps = {
    images: ImageProps[];
};

const FramedPhotoCollage: React.FC<FramedPhotoCollageProps> = ({ images }) => {
    const theme = useTheme();
    const isWideScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [currentImages] = React.useState<ImageProps[]>(images);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && isWideScreen) {
                const containerRect =
                    containerRef.current.getBoundingClientRect();
                const centerY = window.innerHeight / 2;
                const scrollPercentage =
                    (centerY - containerRect.top - containerRect.height / 2) /
                    window.innerHeight;

                const maxScrollOffset = 0.001;

                if (scrollPercentage <= maxScrollOffset) {
                    setScrollOffset(scrollPercentage);
                } else {
                    setScrollOffset(maxScrollOffset);
                }
            }
        };

        if (!isWideScreen) {
            setScrollOffset(0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isWideScreen]);

    return (
        <Stack
            ref={containerRef}
            position="relative"
            maxHeight={{ xs: 600, md: 475 }}
            height="100vh"
            overflow="hidden"
            spacing={0.5}
            padding="1.25rem 1rem"
            direction={{ xs: 'column', md: 'row' }}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                width={70}
                height={70}
                zIndex={-1}
                borderTop="1px solid"
                borderLeft="1px solid"
            />
            <Box
                position="absolute"
                top={0}
                right={0}
                width={70}
                height={70}
                borderTop="1px solid"
                borderRight="1px solid"
                zIndex={-1}
            />

            <Stack
                flex={1}
                spacing={0.5}
                direction={{ xs: 'row', md: 'column' }}
            >
                {currentImages.slice(0, 2).map(({ src, alt }, index) => (
                    <Box
                        key={src}
                        flex={1}
                        position="relative"
                        sx={{
                            transform: `translateX(${
                                scrollOffset * (index + 1) * 250
                            }px) translateY(${
                                scrollOffset * (index + 1) * 250
                            }px)`,
                            transition: 'transform 0.3s ease',
                            objectFit: 'cover',
                            zIndex: 1,
                            '&:nth-of-type(2)': {
                                transform: `translateX(${
                                    -scrollOffset * (index + 1) * -150
                                }px) translateY(${
                                    scrollOffset * (index + 1) * -150
                                }px)`,
                                transition: 'transform 0.3s ease',
                                objectFit: 'cover',
                                zIndex: 1,
                            },
                        }}
                    >
                        <NextImage
                            src={src}
                            alt={alt}
                            fill
                            sizes={
                                `(max-width: ${theme.breakpoints.values.sm}px) 258px` +
                                `,(max-width: ${theme.breakpoints.values.md}px) 400px` +
                                `, 370px`
                            }
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                ))}
            </Stack>

            <Box flex={1} position="relative">
                {currentImages[2]?.src && (
                    <NextImage
                        src={currentImages[2].src}
                        alt={currentImages[2].alt}
                        fill
                        sizes={
                            `(max-width: ${theme.breakpoints.values.sm}px) 520px` +
                            `,(max-width: ${theme.breakpoints.values.md}px) 804px` +
                            `, 370px`
                        }
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center 72%',
                        }}
                    />
                )}
            </Box>

            <Stack
                flex={1}
                spacing={0.5}
                direction={{ xs: 'row', md: 'column' }}
            >
                {currentImages.slice(3).map(({ src, alt }, index) => (
                    <Box
                        key={src}
                        flex={1}
                        position="relative"
                        sx={{
                            transform: `translateX(${
                                -scrollOffset * (index + 1) * 250
                            }px) translateY(${
                                scrollOffset * (index + 1) * 250
                            }px)`,
                            transition: 'transform 0.3s ease',
                            objectFit: 'cover',
                            '&:nth-of-type(2)': {
                                transform: `translateX(${
                                    scrollOffset * (index + 1) * -150
                                }px) translateY(${
                                    scrollOffset * (index + 1) * -150
                                }px)`,
                                transition: 'transform 0.3s ease',
                                objectFit: 'cover',
                                zIndex: 1,
                            },
                        }}
                    >
                        <NextImage
                            src={src}
                            alt={alt}
                            fill
                            sizes={
                                `(max-width: ${theme.breakpoints.values.sm}px) 258px` +
                                `,(max-width: ${theme.breakpoints.values.md}px) 400px` +
                                `, 370px`
                            }
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                ))}
            </Stack>

            <Box
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                height="60%"
                zIndex={-1}
                bgcolor="black.main"
            />
        </Stack>
    );
};

export default FramedPhotoCollage;
