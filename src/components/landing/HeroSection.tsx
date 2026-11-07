import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

const node = {
  fill: "var(--card)",
  stroke: "var(--border)",
  strokeWidth: 1.5,
} as const;
const core = { fill: "var(--primary)", stroke: "var(--primary)" } as const;
const edge = {
  stroke: "var(--primary)",
  strokeWidth: 1.6,
  fill: "none",
  opacity: 0.5,
} as const;
const label = {
  fill: "var(--foreground)",
  fontSize: 12,
  fontWeight: 600,
} as const;
const coreLabel = { ...label, fill: "var(--primary-foreground)" } as const;

/**
 * Supergraph topology: independent services federated through Lattice into a
 * single graph the client queries. Colors resolve from theme CSS variables so
 * it adapts to light and dark.
 */
const GraphDiagram = () => (
  <svg
    viewBox="0 0 440 240"
    className="h-auto w-full"
    role="img"
    aria-label="Independent services federated through Lattice into one client graph"
  >
    <title>Services federated through Lattice</title>
    <path style={edge} d="M90,46 C180,46 180,120 210,120" />
    <path style={edge} d="M90,120 C150,120 170,120 200,120" />
    <path style={edge} d="M90,194 C180,194 180,120 210,120" />
    <path style={edge} d="M240,120 C310,120 320,120 360,120" />

    <rect style={node} x="20" y="30" width="70" height="32" rx="8" />
    <text style={label} x="55" y="50" textAnchor="middle">
      users
    </text>
    <rect style={node} x="20" y="104" width="70" height="32" rx="8" />
    <text style={label} x="55" y="124" textAnchor="middle">
      products
    </text>
    <rect style={node} x="20" y="178" width="70" height="32" rx="8" />
    <text style={label} x="55" y="198" textAnchor="middle">
      orders
    </text>

    <circle style={core} cx="225" cy="120" r="30" />
    <text style={coreLabel} x="225" y="124" textAnchor="middle">
      lattice
    </text>

    <rect style={node} x="360" y="104" width="60" height="32" rx="8" />
    <text style={label} x="390" y="124" textAnchor="middle">
      client
    </text>
  </svg>
);

/**
 * Hero section.
 */
const HeroSection = () => (
  <section className="px-6 pt-20 pb-16 md:pt-28">
    <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl tracking-tight md:text-6xl">
          One graph.
          <br />
          Every service.
        </h1>

        <p className="max-w-md text-lg text-muted-foreground">
          {app.name} federates independent GraphQL services into one graph, then
          plans and executes every query across them. Rust-fast, self-hostable,
          Apache-2.0.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
              Get started
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a
              href={app.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-card/60 p-4 shadow-xl backdrop-blur-sm">
        <GraphDiagram />
      </div>
    </div>
  </section>
);

export default HeroSection;
