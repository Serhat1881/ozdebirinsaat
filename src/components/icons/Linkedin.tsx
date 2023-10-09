/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Linkedin: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M21.5999 21.6V14.568C21.5999 11.112 20.8559 8.47205 16.8239 8.47205C14.8799 8.47205 13.5839 9.52805 13.0559 10.536H13.0079V8.78405H9.19189V21.6H13.1759V15.24C13.1759 13.56 13.4879 11.952 15.5519 11.952C17.5919 11.952 17.6159 13.848 17.6159 15.336V21.576H21.5999V21.6Z" />
            <path d="M2.71191 8.78406H6.69591V21.6001H2.71191V8.78406Z" />
            <path d="M4.7039 2.40002C3.4319 2.40002 2.3999 3.43202 2.3999 4.70402C2.3999 5.97602 3.4319 7.03202 4.7039 7.03202C5.9759 7.03202 7.0079 5.97602 7.0079 4.70402C7.0079 3.43202 5.9759 2.40002 4.7039 2.40002Z" />
        </SvgIcon>
    );
};
