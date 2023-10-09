import { Stack } from '@mui/material';
import React from 'react';

import AnimationPage from '../animations/BrushAnimation/AnimationPage';

const ComingSoon: React.FC = () => {
    return (
        <Stack
            spacing={1.5}
            paddingBottom={3}
            height="100%"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <AnimationPage>ÇOK YAKINDA</AnimationPage>
        </Stack>
    );
};

export default ComingSoon;
