/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Next: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM12.79 10.53L9.26 14.06C9.11 14.21 8.92 14.28 8.73 14.28C8.54 14.28 8.35 14.21 8.2 14.06C7.91 13.77 7.91 13.29 8.2 13L11.2 10L8.2 7C7.91 6.71 7.91 6.23 8.2 5.94C8.49 5.65 8.97 5.65 9.26 5.94L12.79 9.47C13.09 9.76 13.09 10.24 12.79 10.53Z" />
        </SvgIcon>
    );
};
