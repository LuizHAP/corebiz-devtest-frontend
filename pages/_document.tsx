import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Nunito:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            as="style"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            as="style"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <style jsx global>{`
            .slick-slide,
            .slick-slide * {
              outline: none !important;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
