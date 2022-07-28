import type { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

import { wrapper } from '../app/core/store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress
                color="#123123"
                startPosition={0.4}
                stopDelayMs={200}
                height={3}
                options={{
                    trickleRate: 0.05,
                    trickleSpeed: 500,
                    showSpinner: false,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp);
