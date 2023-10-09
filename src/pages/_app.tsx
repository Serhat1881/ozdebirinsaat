import '@/styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { Sofia_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import AppHead from '@/components/partials/AppHead';
import store from '@/store';
import theme from '@/theme';

const sofia = Sofia_Sans({
    subsets: ['latin-ext'],
    weight: ['400', '500', '600', '700'],
    fallback: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
    ],
    display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <style jsx global>{`
                        html {
                            font-family: ${sofia.style.fontFamily};
                        }
                    `}</style>
                    <AppHead />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}
