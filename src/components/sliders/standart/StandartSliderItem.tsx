import { Box, Stack, Typography } from '@mui/material';
import NextImage from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Icon from '@/components/miscellaneous/Icon';

export type StandartSliderItemProps = {
    image: string;
    title: string;
    description?: string;
    date: string;
    startTime?: string;
    endTime?: string;
    url?: string;
};

const StandartSliderItem: React.FC<StandartSliderItemProps> = ({
    image,
    title,
    description,
    url = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box display="flex" flexDirection="column">
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                position="relative"
                left={10}
                right={10}
                sx={{
                    bottom: -96,
                    width: 'calc(100% - 20px)',
                    height: { xs: 320, sm: 300, md: 278 },
                    marginTop: { xs: -8, sm: -6, md: 0 },
                }}
            >
                <NextImage
                    src={image}
                    fill
                    alt={title}
                    style={{
                        transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                        transition: 'transform 0.3s',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                bgcolor="black.main"
                paddingTop="96px"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    paddingX={2}
                    marginTop={1.25}
                />

                <Stack marginX={2} paddingTop={3.5}>
                    <Typography
                        variant="title1"
                        color="white.main"
                        marginBottom={1}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="body.main"
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 7,
                            overflow: 'hidden',
                        }}
                    >
                        {description}
                    </Typography>
                    <Link href={url}>
                        <Box display="flex" marginY={4}>
                            <Typography
                                variant="subtitle2"
                                component="span"
                                color="white.main"
                            >
                                Detaylı Bilgi
                            </Typography>
                            <Icon
                                iconName="rightArrow"
                                color="white"
                                sx={{
                                    marginLeft: 1,
                                    transition: 'transform 0.3s',
                                    transform: isHovered
                                        ? 'scaleX(1.2) translateX(2px)'
                                        : '',
                                }}
                            />
                        </Box>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default StandartSliderItem;
