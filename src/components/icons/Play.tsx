/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Play: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM17.4425 34.4386V13.5614L35.5226 24L17.4425 34.4386Z" />
        </SvgIcon>
    );
};
