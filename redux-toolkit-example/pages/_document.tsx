import { Main, NextScript, Html, Head } from 'next/document';

const MyDocument = () => {
    return (
        <Html lang="en">
            <body>
                <Head>
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="crossOrigin"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="msapplication-config"
                        content="/static/images/favicon/browserconfig.xml"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/static/images/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/images/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/images/favicon/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="/static/images/favicon/site.webmanifest"
                    />
                    <link
                        rel="mask-icon"
                        href="/static/images/favicon/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link
                        rel="shortcut icon"
                        href="/static/images/favicon/favicon.ico"
                    />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
