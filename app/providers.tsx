"use client"

import darkTheme from "./dark.theme";
import { ReactElement } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Container, ThemeProvider } from "@mui/material";
import { AuthContext } from "./auth/auth-context";

interface ProviderProps {
  children: ReactElement[]
  authenticated: boolean
}

export default function Providers({ children, authenticated }: ProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={authenticated}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}