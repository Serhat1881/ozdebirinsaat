/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Facebook: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.23896 16V8.70218H11.6875L12.0549 5.85725H9.23896V4.04118C9.23896 3.21776 9.46667 2.65661 10.6488 2.65661L12.154 2.65599V0.111384C11.8937 0.0775563 11.0002 0 9.96017 0C7.78849 0 6.30172 1.32557 6.30172 3.75942V5.85725H3.8457V8.70218H6.30172V16H9.23896Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
