import { createTheme, responsiveFontSizes } from '@mui/material';

import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

const theme = createTheme({
    // @ts-ignore
    components,
    palette,
    typography,
});

theme.typography.title1 = {
    ...theme.typography.title1,

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
};

theme.typography.title2 = {
    ...theme.typography.title2,

    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.body2 = {
    ...theme.typography.body2,

    [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
    },
};

theme.typography.body3 = {
    ...theme.typography.body3,

    [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
    },
};

export default responsiveFontSizes(theme);
