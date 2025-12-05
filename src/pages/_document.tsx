import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <meta name="description" content="Welcome to Gregory's Links! Explore my collection of links and discover my various online profiles." />
        <meta name="keywords" content="Gregory's Links, Links, Profile, Social Media" />
        <meta name="author" content="Gregory cabral" />
        <meta property="og:title" content="Gregory's Links" />
        <meta property="og:description" content="Welcome to Gregory's Links! Explore my collection of links and discover my various online profiles." />
        <meta property="og:image" content="/images/face.png" />
        <meta property="og:url" content="https://links.gregoryc.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gregory's Links" />
        <meta name="twitter:description" content="Welcome to Gregory's Links! Explore my collection of links and discover my various online profiles." />
        <meta name="twitter:image" content="https://links.gregoryc.dev" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body className="bg-orange-400">
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
