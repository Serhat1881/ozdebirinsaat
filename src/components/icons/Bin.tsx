import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Bin: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M14.0466 3.48683C12.9733 3.38016 11.8999 3.30016 10.8199 3.24016V3.2335L10.6733 2.36683C10.5733 1.7535 10.4266 0.833496 8.86661 0.833496H7.11994C5.56661 0.833496 5.41994 1.7135 5.31328 2.36016L5.17328 3.2135C4.55328 3.2535 3.93328 3.2935 3.31328 3.3535L1.95328 3.48683C1.67328 3.5135 1.47328 3.76016 1.49994 4.0335C1.52661 4.30683 1.76661 4.50683 2.04661 4.48016L3.40661 4.34683C6.89994 4.00016 10.4199 4.1335 13.9533 4.48683C13.9733 4.48683 13.9866 4.48683 14.0066 4.48683C14.2599 4.48683 14.4799 4.2935 14.5066 4.0335C14.5266 3.76016 14.3266 3.5135 14.0466 3.48683Z" />
            <path d="M12.82 5.4265C12.66 5.25984 12.44 5.1665 12.2134 5.1665H3.7867C3.56004 5.1665 3.33337 5.25984 3.18004 5.4265C3.0267 5.59317 2.94004 5.81984 2.95337 6.05317L3.3667 12.8932C3.44004 13.9065 3.53337 15.1732 5.86004 15.1732H10.14C12.4667 15.1732 12.56 13.9132 12.6334 12.8932L13.0467 6.05984C13.06 5.81984 12.9734 5.59317 12.82 5.4265ZM9.1067 11.8332H6.8867C6.61337 11.8332 6.3867 11.6065 6.3867 11.3332C6.3867 11.0598 6.61337 10.8332 6.8867 10.8332H9.1067C9.38004 10.8332 9.6067 11.0598 9.6067 11.3332C9.6067 11.6065 9.38004 11.8332 9.1067 11.8332ZM9.6667 9.1665H6.33337C6.06004 9.1665 5.83337 8.93984 5.83337 8.6665C5.83337 8.39317 6.06004 8.1665 6.33337 8.1665H9.6667C9.94004 8.1665 10.1667 8.39317 10.1667 8.6665C10.1667 8.93984 9.94004 9.1665 9.6667 9.1665Z" />
        </SvgIcon>
    );
};
