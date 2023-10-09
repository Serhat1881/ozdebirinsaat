declare module '@mui/material/styles' {
    interface TypographyVariants {
        title1: React.CSSProperties;
        title2: React.CSSProperties;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        body3: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        title1?: React.CSSProperties;
        title2?: React.CSSProperties;
        body1?: React.CSSProperties;
        body2?: React.CSSProperties;
        body3?: React.CSSProperties;
    }
}

export const typography = {
    fontFamily: 'inherit',

    h1: {
        fontSize: '5rem',
        fontWeight: 700,
    },

    h2: {
        fontSize: '4rem',
        fontWeight: 700,
    },

    h3: {
        fontSize: '3.5rem',
        fontWeight: 700,
    },

    h4: {
        fontSize: '3rem',
        fontWeight: 700,
    },

    h5: {
        fontSize: '2rem',
        fontWeight: 700,
    },

    h6: {
        fontSize: '1.5rem',
        fontWeight: 700,
    },

    title1: {
        fontSize: '1.25rem',
        fontWeight: 400,
    },

    title2: {
        fontSize: '2.5rem',
        fontWeight: 900,
    },

    body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
    },

    body2: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.675rem',
    },

    body3: {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: '2.125rem',
    },
};
