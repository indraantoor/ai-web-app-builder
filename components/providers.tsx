"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { ThemeProvider, useTheme, type Theme } from "./theme-provider";

function ClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  // During SSR and initial hydration, default to dark to match the server layout class
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <ClerkProvider
      appearance={{
        theme: isDark ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
}

const Providers = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) => {
  return (
    <ThemeProvider defaultTheme={initialTheme}>
      <ClerkWithTheme>{children}</ClerkWithTheme>
    </ThemeProvider>
  );
};

export default Providers;
