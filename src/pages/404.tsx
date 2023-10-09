import { Stack, Typography } from '@mui/material';
import React from 'react';

import BrushAnimation from '@/components/animations/BrushAnimation/AnimationPage';
import VLinkButton from '@/components/buttons/VLinkButton';
import MainLayout from '@/components/layouts/main/MainLayout';

const Error404: React.FC = () => {
    return (
        <MainLayout title="Sayfa Bulunamadı" containerWidth="xl">
            <Stack
                spacing={1.5}
                paddingBottom={3}
                height="100%"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <BrushAnimation>404</BrushAnimation>

                <Stack spacing={5}>
                    <Stack spacing={0.5}>
                        <Typography
                            variant="body3"
                            component="h1"
                            fontWeight={800}
                        >
                            Sayfa Bulunamadı
                        </Typography>

                        <Typography variant="body2">
                            Üzgünüz, aradığınız sayfa mevcut değil.
                        </Typography>
                    </Stack>

                    <VLinkButton
                        href="/"
                        variant="outlined"
                        color="secondary"
                        sx={{ color: 'black.main', fontSize: '1rem' }}
                        endIconName="rightArrow"
                    >
                        Anasayfaya Dön
                    </VLinkButton>
                </Stack>
            </Stack>
        </MainLayout>
    );
};

export default Error404;
