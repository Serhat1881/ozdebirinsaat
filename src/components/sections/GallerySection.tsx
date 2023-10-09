import { Grid, Stack, Typography, useTheme } from '@mui/material';
import type { MouseEvent } from 'react';
import React, { useState } from 'react';

import type { Program } from '@/data/hizmetler';

import DisplayImage from '../displays/DisplayImage';
import GalleryModal from '../modals/GalleryModal';

type GallerySectionProps = Pick<Program, 'imageGallery' | 'photographer'>;

const GallerySection: React.FC<GallerySectionProps> = ({
    imageGallery,
    photographer,
}) => {
    const theme = useTheme();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const handleModalOpen = (e: MouseEvent<HTMLDivElement>) => {
        const { index } = e.currentTarget.dataset;

        if (index) {
            setModalIndex(Number(index));
            setModalOpen(true);
        }
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <Stack gap={3} paddingTop={8}>
            <Typography variant="h6" component="h2">
                Yaptığımız İşlerden Kareler
            </Typography>

            <Grid container spacing={4}>
                {imageGallery.map(({ image, alt }, index) => (
                    <Grid item xs={12} sm={6} md={4} key={image}>
                        <DisplayImage
                            imagePath={image}
                            alt={alt}
                            sizes={
                                `(max-width: ${theme.breakpoints.values.sm}px) 100vw,` +
                                `(max-width: ${theme.breakpoints.values.md}px) 50vw,` +
                                `(max-width: ${theme.breakpoints.values.lg}px) 33vw,` +
                                `20vw`
                            }
                            width="100%"
                            height={220}
                            imgStyle={{
                                objectPosition: 'center 70%',
                            }}
                            index={index}
                            onImageClick={handleModalOpen}
                        />
                    </Grid>
                ))}
            </Grid>

            {photographer && (
                <Typography variant="body1">
                    Fotoğraflar: {photographer}
                </Typography>
            )}

            <GalleryModal
                modalIndex={modalIndex}
                imageGallery={imageGallery}
                open={modalOpen}
                onClose={handleModalClose}
            />
        </Stack>
    );
};

export default GallerySection;
