import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

/**
 * Theme toggle.
 */
const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      aria-label="Toggle theme"
      title="Toggle theme (T)"
    >
      <Moon className="hidden size-4 dark:block" />
      <Sun className="size-4 dark:hidden" />
    </Button>
  );
};

export default ThemeToggle;
