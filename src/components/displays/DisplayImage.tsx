import type { SxProps } from '@mui/material';
import { Box } from '@mui/material';
import NextImage from 'next/image';
import type { MouseEvent } from 'react';
import React from 'react';

type DisplayImageProps = {
    imagePath: string;
    width?: any;
    height: any;
    alt: string;
    sx?: SxProps;
    className?: string;
    fill?: boolean;
    sizes?: string;
    imgStyle?: any;
    priority?: boolean;
    index?: number;
    onImageClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

const DisplayImage: React.FC<DisplayImageProps> = ({
    imagePath,
    width = 1,
    height,
    alt,
    className,
    sx,
    fill = true,
    sizes = '100vw',
    imgStyle,
    priority = false,
    index,
    onImageClick,
}) => {
    return (
        <Box
            position="relative"
            width={width}
            height={height}
            className={className}
            sx={{ overflow: 'hidden', cursor: 'pointer', ...sx }}
            data-index={index}
            onClick={onImageClick}
        >
            <NextImage
                src={imagePath}
                fill={fill}
                alt={alt}
                sizes={sizes}
                priority={priority}
                style={{
                    objectFit: 'cover',
                    ...imgStyle,
                }}
            />
        </Box>
    );
};

export default DisplayImage;
