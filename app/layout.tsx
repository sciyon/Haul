import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/header";
import Providers from "./providers";
import {CssBaseline} from "@mui/material";
import { Container } from "@mui/material";
import authenticated from "./auth/authenticated";
import logout from "./auth/logout";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await authenticated();

  return (
    <html lang="en">
      <body>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header logout={logout} />
          <Container maxWidth="xl" className="mt-10">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
