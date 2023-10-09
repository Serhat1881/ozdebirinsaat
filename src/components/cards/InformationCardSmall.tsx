import { Box, Typography } from '@mui/material';
import React from 'react';

type InformationCardSmallProps = {
    title: string;
    description: string;
};

const InformationCardSmall: React.FC<InformationCardSmallProps> = ({
    title,
    description,
}) => {
    return (
        <Box width="25%">
            <Typography variant="body3" fontWeight={800} component="h2">
                {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </Box>
    );
};

export default InformationCardSmall;
