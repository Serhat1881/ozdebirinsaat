import { Box } from '@mui/material';
import React from 'react';

import type { IconProps } from './Icon';
import Icon from './Icon';

const WrappedIcon: React.FC<IconProps> = (props) => {
    return (
        <Box
            position="relative"
            width={{ xs: 75, md: 100 }}
            height={{ xs: 75, md: 100 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                borderLeft="1px solid"
                borderTop="1px solid"
                width="15%"
                height="15%"
            />
            <Box
                position="absolute"
                top={0}
                right={0}
                borderRight="1px solid"
                borderTop="1px solid"
                width="15%"
                height="15%"
            />
            <Box
                position="absolute"
                bottom={0}
                left={0}
                borderLeft="1px solid"
                borderBottom="1px solid"
                width="15%"
                height="15%"
            />
            <Box
                position="absolute"
                bottom={0}
                right={0}
                borderRight="1px solid"
                borderBottom="1px solid"
                width="15%"
                height="15%"
            />
            <Icon
                {...props}
                sx={{ fontSize: { xs: 56, md: 64 }, ...props.sx }}
            />
        </Box>
    );
};

export default WrappedIcon;
