/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const RoundAdd: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14 10.75H10.75V14C10.75 14.41 10.41 14.75 10 14.75C9.59 14.75 9.25 14.41 9.25 14V10.75H6C5.59 10.75 5.25 10.41 5.25 10C5.25 9.59 5.59 9.25 6 9.25H9.25V6C9.25 5.59 9.59 5.25 10 5.25C10.41 5.25 10.75 5.59 10.75 6V9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75Z" />
        </SvgIcon>
    );
};
