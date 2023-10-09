import './App.module.scss';

import { Box } from '@mui/material';
import React from 'react';

type BrushAnimationProps = {
    children: string;
};

const BrushAnimation: React.FC<BrushAnimationProps> = ({ children }) => {
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                animation: `bounce 1s both`,
                fontWeight: 500,
                '@keyframes bounce': {
                    from: {
                        animationTimingFunction:
                            'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)',
                    },
                    '20%': {
                        animationTimingFunction:
                            'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)',
                    },
                    '53%': {
                        animationTimingFunction:
                            'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)',
                    },
                    '80%': {
                        animationTimingFunction:
                            'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)',
                    },
                    to: {
                        animationTimingFunction:
                            'cubic-bezier(0.215, 0.61, 0.355, 1)',
                        transform: 'translate3d(0, 0, 0)',
                    },
                    '40%, 43%': {
                        animationTimingFunction:
                            'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                        transform: 'translate3d(0, -30px, 0)',
                    },
                    '70%': {
                        animationTimingFunction:
                            'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                        transform: 'translate3d(0, -15px, 0)',
                    },
                    '90%': {
                        transform: 'translate3d(0, -4px, 0)',
                    },
                },
            }}
            className="animated-box"
        >
            {children}
        </Box>
    );
};

export default BrushAnimation;
