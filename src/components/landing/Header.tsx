import { Link } from "@tanstack/react-router";

import { Logo, ThemeToggle } from "@/components/core";
import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Site header.
 */
const Header = () => (
  <header className="sticky top-0 z-50 border-border/50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <Link to="/" aria-label={app.name}>
        <Logo />
      </Link>

      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
        </Button>

        <Button variant="ghost" size="sm" asChild>
          <a href={app.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>

        <ThemeToggle />
      </nav>
    </div>
  </header>
);

export default Header;
