import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Drake Innovation</title>
          <meta name="description" content="Drake Innovation" />
          <meta property="og:image" content={'/images/joeldrake.jpg'} />
          <link rel="apple-touch-icon" href="/images/icon.jpg" />
          <link rel="shortcut icon" href="/images/dragon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
