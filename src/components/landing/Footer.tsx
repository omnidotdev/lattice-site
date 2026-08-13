import { AppFooter } from "@omnidotdev/thornberry/app-footer";

import app from "@/lib/config/app.config";

/**
 * Site footer. Renders the shared Omni `<AppFooter>`, which bakes in the
 * "Made with <symbol> by Omni" credit, the omni.dev link, and the legal links so
 * they can't drift. Lattice supplies only its catalog symbol, docs link, and its
 * GitHub link.
 */
const Footer = () => (
  <AppFooter
    className="border-border/50 border-t"
    appSymbol={app.icon}
    docsUrl={app.links.docs}
    orgUrl={app.organization.url}
    links={
      <a
        href={app.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-2 py-1 text-sm transition-colors hover:text-foreground"
      >
        GitHub
      </a>
    }
  />
);

export default Footer;
