import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';

type OverlayProps = {
    type?: string;
} & BoxProps;

const SliderOverlay: React.FC<OverlayProps> = ({
    children,
    type = 'dark',
    ...props
}) => {
    const renderOverlayTypeSX = () => {
        switch (type) {
            case 'dark':
                return {
                    backgroundColor: 'rgba(0,0,0,.5)',
                    width: '100%',
                    height: '100%',
                };

            default:
                return {
                    backgroundColor: 'rgba(0,0,0,.5)',
                    width: '100%',
                    height: '100%',
                };
        }
    };

    return (
        <Box {...props} sx={{ ...renderOverlayTypeSX(), ...props.sx }}>
            {children}
        </Box>
    );
};

SliderOverlay.displayName = 'SliderOverlay';

export default SliderOverlay;
