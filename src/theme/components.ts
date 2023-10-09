import type { Theme } from '@mui/material';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        navlink: true;
        dropwdownLink: true;
        title1: true;
        title2: true;
        body1: true;
        body3: true;
    }
}

declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        border: true;
        white: true;
        black: true;
        dropdown: true;
        transparent: true;
        shareIconColor: true;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        border: true;
        black: true;
        transparent: true;
    }

    interface ButtonPropsVariantOverrides {
        tertiary: true;
    }
}

declare module '@mui/material/ButtonGroup' {
    interface ButtonGroupPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        border: true;
        black: true;
        transparent: true;
    }

    interface ButtonGroupPropsVariantOverrides {
        tertiary: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        tertiary: true;
        quaternary: true;
        border: true;
        black: true;
        dropdown: true;
        transparent: true;
    }

    interface ButtonPropsVariantOverrides {
        tertiary: true;
    }
}

export const components = {
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                body3: 'p',
            },
        },
        variants: [
            {
                props: { color: 'navlink' },
                style: (props: { theme: Theme }) => ({
                    color: props.theme.palette.black.main,
                    fontSize: '1.125rem',
                    fontWeight: '400',
                }),
            },
            {
                props: { variant: 'dropwdownLink' },
                style: (props: { theme: Theme }) => ({
                    color: props.theme.palette.white.main,
                    fontSize: '1.125rem',
                    fontWeight: '400',
                }),
            },
        ],
    },

    MuiPaper: {
        defaultProps: {
            variant: 'outlined',
        },
        styleOverrides: {
            root: {
                borderRadius: 8,
            },
        },
    },

    MuiButton: {
        variants: [
            {
                props: { variant: 'outlined' },
                style: (props: { theme: Theme }) => ({
                    backgroundColor: props.theme.palette.transparent.main,
                    color: props.theme.palette.white.main,
                    borderRadius: 0,
                    borderColor: props.theme.palette.tertiary.main,
                    padding: '16px 24px',
                }),
            },
            {
                props: { variant: 'tertiary' },
                style: (props: { theme: Theme }) => ({
                    backgroundColor: props.theme.palette.transparent.main,
                    color: props.theme.palette.white.main,
                }),
            },
        ],
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                minWidth: 40,
                textTransform: 'none',

                '&.MuiButton-outlinedBlack': {
                    color: '#000',
                },
            },
        },
    },

    MuiDrawer: {
        styleOverrides: {
            root: {
                '& .MuiDrawer-paper': {
                    borderRadius: 0,
                },
            },
        },
    },

    MuiAccordion: {
        styleOverrides: {
            root: {
                border: 0,

                '& .MuiAccordionSummary-root': {
                    paddingInline: '1.5rem',
                },

                '&.Mui-expanded:before': {
                    opacity: 1,
                },
            },
        },
    },

    MuiModal: {
        styleOverrides: {
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '& .MuiModal-backdrop': {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
            },
        },
    },
};
