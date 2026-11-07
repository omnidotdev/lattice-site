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

// users, products, orders -> lattice, then lattice -> client.
const EDGES = [
  "M90,46 C180,46 180,120 210,120",
  "M90,120 C150,120 170,120 200,120",
  "M90,194 C180,194 180,120 210,120",
  "M240,120 C310,120 320,120 360,120",
];

const services = [
  { label: "users", y: 30 },
  { label: "products", y: 104 },
  { label: "orders", y: 178 },
];

/**
 * Animated supergraph topology: services federate through Lattice into one
 * graph the client queries. Edges draw in, query dots flow along them, and the
 * core pulses. Colors resolve from theme variables; motion respects
 * prefers-reduced-motion (handled in CSS).
 */
const GraphDiagram = () => (
  <svg
    viewBox="0 0 440 240"
    className="h-auto w-full"
    role="img"
    aria-label="Independent services federated through Lattice into one client graph"
  >
    <title>Services federated through Lattice</title>

    {EDGES.map((d, i) => (
      <path
        key={d}
        className="lat-edge"
        style={{ ...edge, animationDelay: `${i * 0.15}s` }}
        d={d}
      />
    ))}

    {/* query dots flowing through the graph */}
    {EDGES.map((d, i) => (
      <circle key={`dot-${d}`} r="3" fill="var(--primary)">
        <animateMotion
          dur="2.6s"
          begin={`${0.6 + i * 0.5}s`}
          repeatCount="indefinite"
          path={d}
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
        />
      </circle>
    ))}

    {services.map((s, i) => (
      <g
        key={s.label}
        className="lat-float"
        style={{ animationDelay: `${i * 0.8}s` }}
      >
        <rect style={node} x="20" y={s.y} width="70" height="32" rx="8" />
        <text style={label} x="55" y={s.y + 20} textAnchor="middle">
          {s.label}
        </text>
      </g>
    ))}

    <circle
      className="lat-glow"
      cx="225"
      cy="120"
      r="42"
      fill="var(--primary)"
    />
    <circle style={core} cx="225" cy="120" r="30" />
    <text style={coreLabel} x="225" y="124" textAnchor="middle">
      {app.name.toLowerCase()}
    </text>

    <rect style={node} x="360" y="104" width="60" height="32" rx="8" />
    <text style={label} x="390" y="124" textAnchor="middle">
      client
    </text>
  </svg>
);

const shapes = [
  "top-8 -left-6 size-16 rotate-12",
  "top-40 right-10 size-10 -rotate-6",
  "bottom-10 left-1/3 size-20 rotate-6",
];

/**
 * Hero section.
 */
const HeroSection = () => (
  <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28">
    {/* drifting brand shapes */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {shapes.map((cls, i) => (
        <span
          key={cls}
          className={`lat-shape absolute rounded-[10px] border border-primary/20 bg-primary/5 ${cls}`}
          style={{ animationDelay: `${i * 2.5}s` }}
        />
      ))}
    </div>

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
