import { AppProps } from "$fresh/server.ts";

import Header from "../components/Header.tsx";
import env from "../utils/env.ts";

const { APP_NAME } = env;

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{APP_NAME}</title>
      </head>
      <body class="py-6 px-8">
        <Header />
        <Component />
      </body>
    </html>
  );
}
