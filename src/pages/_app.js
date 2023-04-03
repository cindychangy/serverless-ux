import Head from 'next/head';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import { globalStyes } from '../styles/global-styles';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';
import GuideContextProvider from '../context/guide';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Serverless UX Prototype</title>
      </Head>
      <Global styles={globalStyes} />
      <EuiProvider colorMode="light">
        <EuiErrorBoundary>
          <GuideContextProvider>
            <Component {...pageProps} />
          </GuideContextProvider>
        </EuiErrorBoundary>
      </EuiProvider>
    </>
  );
};

export default App;
