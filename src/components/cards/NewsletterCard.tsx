import { Box, Skeleton, Stack, Typography } from '@mui/material';
import NextImage from 'next/image';
import Link from 'next/link';
import React from 'react';


export type NewsletterCardProps = {
    title: string;
    image: string;
    cardHref?: string;
    priority?: boolean;
    loading?: boolean;
    date: string |any;
};

const NewsletterCard: React.FC<NewsletterCardProps> = ({
    title,
    image,
    cardHref = '',
    priority = false,
    loading = false,
}) => {
    const isExternalLink = cardHref.startsWith('http') || cardHref.startsWith('//');
    return (
        <Box
            display="flex"
            flexDirection="column"
            paddingBottom={10}
            flex={1}
            maxWidth={354}
            position="relative"
            sx={{
                '& img': {
                    transform: 'scale(0.95)',
                    transition: 'transform 0.3s',
                },

                '&:hover': {
                    '& img': {
                        transform: 'scale(1)',
                    },
                },
            }}
        >
            {loading ? (
                <Box height="100%" position="relative" paddingTop={1}>
                    <Skeleton variant="rectangular" width="100%" height={180} />

                    <Skeleton variant="text" width="100%" height="10%" />

                    <Skeleton variant="text" width="100%" height="15%" />

                    <Skeleton variant="text" width="100%" height="15%" />
                </Box>
            ) : (
                <Link
                    target={isExternalLink ? '_blank' : undefined}
                    href={cardHref}
                    style={{ display: 'inline-flex', flex: 1 }}
                >
                    <Box
                        position="absolute"
                        sx={{
                            width: '100%',
                            height: 220,
                            zIndex: 2,
                        }}
                    >
                        <NextImage
                            src={image}
                            fill
                            sizes="(max-width: 600px) 100vw, 600px"
                            alt={title}
                            priority={priority}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    <Box
                        bgcolor="black.main"
                        paddingTop="146px"
                        position="relative"
                        flex={1}
                        paddingX={2}
                        paddingBottom={4}
                        top={80}
                    >
                        <Stack spacing={1}>

                            <Typography
                                variant="title1"
                                color="white.main"
                                marginBottom={1}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="white.main"
                                marginBottom={1}
                            >
                                Detaylı Bilgi İçin Tıklayınız
                            </Typography>
                        </Stack>
                    </Box>
                </Link>
            )}
        </Box>
    );
};

export default NewsletterCard;
