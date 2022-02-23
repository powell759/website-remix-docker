import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import commonCssUrl from "~/styles/common.css";

import type { MetaFunction } from "remix";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: commonCssUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "Maxwell" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className="bubble">made with: mittens on</div>
      </body>
    </html>
  );
}
