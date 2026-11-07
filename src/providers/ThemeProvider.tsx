import { createContext, use, useCallback, useEffect, useState } from "react";

import { setTheme as setThemeServerFn } from "@/server/functions/theme";

import type { PropsWithChildren } from "react";
import type { Theme } from "@/server/functions/theme";

interface ThemeContext {
  theme: Theme;
  setTheme: (val: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

/**
 * Global theme provider.
 */
const ThemeProvider = ({
  children,
  theme: initialTheme,
}: PropsWithChildren<{ theme: Theme }>) => {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const setTheme = useCallback((val: Theme) => {
    // update DOM immediately for instant visual feedback
    document.documentElement.className = val;

    setThemeState(val);

    // persist to server in background (non-blocking)
    setThemeServerFn({ data: val });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Global `t` shortcut toggles the theme, matching the Omni app convention.
  // Ignored while typing in a form field or editable element.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "t" || e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        /^(?:input|textarea|select)$/i.test(target?.tagName ?? "")
      ) {
        return;
      }

      toggleTheme();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleTheme]);

  return (
    <ThemeContext value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => {
  const val = use(ThemeContext);

  if (!val) throw new Error("`useTheme` called outside of `<ThemeProvider />`");

  return val;
};

export default ThemeProvider;
