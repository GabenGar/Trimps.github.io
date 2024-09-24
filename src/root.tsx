import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { init } from "#legacy";

import "./styles/global.scss";

// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         {children}
//         <ScrollRestoration />
//         <Scripts />
//       </body>
//     </html>
//   );
// }

export default function App() {
  useEffect(() => init(), []);

  return (
    <>
      <Outlet />
      <Scripts />
    </>
  );
}

export function HydrateFallback() {
  return (
    <>
      <p>Loading...</p>
      <Scripts />
    </>
  );
}
