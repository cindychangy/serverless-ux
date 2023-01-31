import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Online prototype for Platform Onboarding"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon.png"
            sizes="16x16"
          />
        </Head>
        <body className="guideBody">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
