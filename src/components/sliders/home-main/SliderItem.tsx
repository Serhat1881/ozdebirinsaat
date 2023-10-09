import { Box, Container, Grid, Typography } from '@mui/material';
import NextImage from 'next/image';
import React from 'react';

import VLinkButton from '@/components/buttons/VLinkButton';

import SliderOverlay from './SliderOverlay';

export type SliderItemProps = {
    title: string;
    description?: string;
    image: string;
    priority?: boolean;
    buttonHref?: string;
};

const HomeMainSliderItem: React.FC<SliderItemProps> = ({
    title,
    description,
    image,
    priority = false,
    buttonHref = '#!',
}) => {
    return (
        <SliderOverlay>
            <Box position="fixed" zIndex={-1} height="100%" width="100%">
                <NextImage
                    src={image}
                    fill
                    sizes="100vw"
                    priority={priority}
                    alt={title}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </Box>

            <Container maxWidth="xl" sx={{ height: '100%' }}>
                <Grid
                    container
                    alignItems="center"
                    columnSpacing={10}
                    sx={{ height: '100%' }}
                >
                    <Grid item xs={11} md={6}>
                        <Typography
                            variant="h2"
                            component="h1"
                            color="white.main"
                            fontWeight={400}
                        >
                            {title}
                        </Typography>

                        <Box marginTop={2}>
                            <Typography variant="body2" color="white.main">
                                {description}
                            </Typography>
                        </Box>

                        <Box marginTop={5}>
                            <VLinkButton
                                href={buttonHref}
                                variant="outlined"
                                endIconName="rightArrow"
                            >
                                Detaylı Bilgi
                            </VLinkButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </SliderOverlay>
    );
};

export default HomeMainSliderItem;
