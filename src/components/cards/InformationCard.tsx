import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import VLinkButton from '../buttons/VLinkButton';
import type { ImageProps } from '../miscellaneous/FramedPicture';
import FramedPhotoCollage from '../miscellaneous/FramedPicture';

type InformationCardProps = {
    images: ImageProps[];
    title: string;
    description: string;
    buttonHref: string;
};

const InformationCard: React.FC<InformationCardProps> = ({
    title,
    description,
    images,
    buttonHref,
}) => {
    return (
        <Box marginTop={12}>
            <FramedPhotoCollage images={images} />
            <Stack
                alignItems="center"
                paddingX={{ xs: 0, sm: 5, md: 10 }}
                paddingTop={5}
                paddingBottom={2}
                spacing={2}
            >
                <Typography variant="title2" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1" textAlign="center">
                    {description}
                </Typography>
                <VLinkButton
                    href={buttonHref}
                    variant="outlined"
                    endIconName="rightArrow"
                    color="black"
                    sx={{
                        marginTop: 3,
                    }}
                >
                    Detaylı Bilgi
                </VLinkButton>
            </Stack>
        </Box>
    );
};

export default InformationCard;
