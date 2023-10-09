import type { ButtonProps, SvgIconProps } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';

import type { IconProps } from '../miscellaneous/Icon';
import Icon from '../miscellaneous/Icon';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {}
}

export interface VButtonProps extends ButtonProps {
    children?: React.ReactNode;
    startIconName?: IconProps['iconName'];
    endIconName?: IconProps['iconName'];
    iconProps?: SvgIconProps;
}

const VButton: React.FC<VButtonProps> = ({
    children,
    startIconName,
    endIconName,
    iconProps,
    ...props
}) => {
    const StartIcon = startIconName ? (
        <Icon iconName={startIconName} {...iconProps} />
    ) : null;
    const EndIcon = endIconName ? (
        <Icon iconName={endIconName} {...iconProps} />
    ) : null;
    const getSX = () => {
        if (startIconName === 'rightArrow') {
            return {
                '& svg': {
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.3s',
                },

                ':hover svg': {
                    transform: 'rotate(180deg) scaleX(1.2) translateX(2px)',
                },
            };
        }
        if (endIconName === 'rightArrow') {
            return {
                '& svg': {
                    transition: 'transform 0.3s',
                },

                ':hover svg': {
                    transform: 'scaleX(1.2) translateX(2px)',
                },
            };
        }
        return null;
    };

    return (
        <Button
            startIcon={StartIcon}
            endIcon={EndIcon}
            {...props}
            sx={{ ...getSX(), ...props.sx }}
        >
            {children}
        </Button>
    );
};

export default VButton;
