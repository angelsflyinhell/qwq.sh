import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script id='script' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-GHFH4F2G6W`} />

            <Script id='script-2' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GHFH4F2G6W', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
