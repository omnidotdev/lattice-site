import app from "@/lib/config/app.config";

/**
 * Brand mark. PLACEHOLDER: this is a stand-in grid glyph until the real logo
 * lands. When it does, replace the body of `LogoMark` with the final asset
 * (an inline SVG, or an <img> from /public) and keep the same box size.
 */
const LogoMark = () => (
  <span
    aria-hidden
    data-logo-placeholder
    className="grid size-6 grid-cols-3 grid-rows-3 gap-[2px]"
  >
    <span className="rounded-[1px] bg-primary" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary/30" />
    <span className="rounded-[1px] bg-primary" />
  </span>
);

/**
 * Logo lockup: the mark plus the wordmark.
 */
const Logo = () => (
  <span className="flex items-center gap-2.5 font-semibold tracking-tight">
    <LogoMark />
    <span>{app.name}</span>
  </span>
);

export default Logo;
