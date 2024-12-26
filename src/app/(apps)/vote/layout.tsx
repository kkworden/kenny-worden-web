"use client";

// TODO: Because we have to "use client", we can't set metadata for the page.
import { store } from "@/features/vote/store";
import { Provider } from 'react-redux'

import "../../globals.css";
import "./styles.css";

export default function VoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
