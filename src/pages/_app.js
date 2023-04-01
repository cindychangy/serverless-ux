import Head from 'next/head';
import React, { createContext, useState } from 'react';
import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import { globalStyes } from '../styles/global-styles';
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiProvider } from '@elastic/eui';

export const GuideContext = createContext();

const App = ({ Component, pageProps }) => {
  const [activeGuide, setActiveGuide] = useState(null);

  return (
    <>
      <Head>
        <title>Serverless UX Prototype</title>
      </Head>
      <Global styles={globalStyes} />
      <EuiProvider colorMode="light">
        <EuiErrorBoundary>
          <GuideContext.Provider value={{ activeGuide, setActiveGuide }}>
            <Component {...pageProps} />
          </GuideContext.Provider>
        </EuiErrorBoundary>
      </EuiProvider>
    </>
  );
};

export default App;
