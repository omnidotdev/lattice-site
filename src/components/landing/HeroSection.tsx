import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

// Clients consume the unified graph, so they carry the brand tint.
const clientChip = {
  fill: "var(--primary)",
  fillOpacity: 0.1,
  stroke: "var(--primary)",
  strokeOpacity: 0.45,
  strokeWidth: 1.5,
} as const;
const edge = {
  stroke: "var(--primary)",
  strokeWidth: 1.6,
  fill: "none",
  opacity: 0.5,
} as const;
const chipLabel = {
  fill: "var(--foreground)",
  fontSize: 12,
  fontWeight: 600,
} as const;
const strokeIcon = {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// services -> lattice (converge at 232,100), then lattice -> clients (from 288,100).
const EDGES = [
  "M118,43 C172,43 190,121 232,121",
  "M118,121 C172,121 190,121 232,121",
  "M118,199 C172,199 190,121 232,121",
  "M288,121 C330,121 348,43 402,43",
  "M288,121 C330,121 348,121 402,121",
  "M288,121 C330,121 348,199 402,199",
];

type IconName = "users" | "package" | "cart" | "globe" | "smartphone" | "bot";

const ICONS: Record<IconName, React.ReactNode> = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  package: (
    <>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  cart: (
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  smartphone: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </>
  ),
  bot: (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </>
  ),
};

// Each source carries a subtle, distinct tint so the graph reads at a glance.
const services: { label: string; y: number; name: IconName; tint: string }[] = [
  { label: "Users", y: 26, name: "users", tint: "#4f93db" },
  { label: "Products", y: 104, name: "package", tint: "#d2a13c" },
  { label: "Orders", y: 182, name: "cart", tint: "#a07ee0" },
];
const clients: { label: string; y: number; name: IconName }[] = [
  { label: "Web", y: 26, name: "globe" },
  { label: "Mobile", y: 104, name: "smartphone" },
  { label: "AI agent", y: 182, name: "bot" },
];

/**
 * Supergraph topology: tinted sources (left) federate through the Lattice mark
 * into one graph, delivered to brand-tinted clients (right). The only motion is
 * the pulsing core and the query dots traveling the wires.
 */
const GraphDiagram = () => (
  <svg
    viewBox="0 0 520 250"
    className="h-auto w-full"
    role="img"
    aria-label="Services federated through Lattice into one graph, delivered to web, mobile, and AI-agent clients"
  >
    <title>Services federated through Lattice to its clients</title>

    {EDGES.map((d) => (
      <path key={d} style={edge} d={d} />
    ))}

    {EDGES.map((d, i) => (
      <circle key={`dot-${d}`} r="3" fill="var(--primary)" opacity="0">
        <set
          attributeName="opacity"
          to="1"
          begin={`${0.3 + i * 0.4}s`}
          fill="freeze"
        />
        <animateMotion
          dur="2.6s"
          begin={`${0.3 + i * 0.4}s`}
          repeatCount="indefinite"
          path={d}
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
        />
      </circle>
    ))}

    {services.map((s) => (
      <g key={s.label}>
        <rect
          x="12"
          y={s.y}
          width="106"
          height="34"
          rx="9"
          fill={s.tint}
          fillOpacity={0.1}
          stroke={s.tint}
          strokeOpacity={0.5}
          strokeWidth={1.5}
        />
        <g
          style={{ ...strokeIcon, stroke: s.tint }}
          transform={`translate(24 ${s.y + 10}) scale(0.6)`}
        >
          {ICONS[s.name]}
        </g>
        <text style={chipLabel} x="50" y={s.y + 22}>
          {s.label}
        </text>
      </g>
    ))}

    {clients.map((c) => (
      <g key={c.label}>
        <rect
          style={clientChip}
          x="402"
          y={c.y}
          width="106"
          height="34"
          rx="9"
        />
        <g
          style={{ ...strokeIcon, stroke: "var(--primary)" }}
          transform={`translate(414 ${c.y + 10}) scale(0.6)`}
        >
          {ICONS[c.name]}
        </g>
        <text style={chipLabel} x="440" y={c.y + 22}>
          {c.label}
        </text>
      </g>
    ))}

    {/* lattice core: a solid node with the mark knocked out, label beneath */}
    <circle cx="260" cy="121" r="35" fill="var(--primary)" />
    <g
      transform="translate(234 95) scale(0.405)"
      fill="var(--primary-foreground)"
    >
      <g transform="translate(-23,150) scale(0.1,-0.1)">
        <path d="M728 1403 c-138 -139 -138 -155 -3 -293 l85 -86 -185 -188 c-223 -227 -219 -214 -112 -322 l72 -73 57 47 57 47 -44 45 c-25 25 -45 50 -45 55 0 5 64 74 142 152 l142 143 38 -37 38 -37 53 52 52 52 -145 145 -144 145 44 45 44 45 59 -57 58 -58 44 50 c24 28 44 53 45 56 0 3 -38 42 -84 87 -79 77 -86 82 -127 82 -43 0 -48 -4 -141 -97z" />
        <path d="M1145 1166 l-50 -44 31 -34 c66 -72 72 -55 -77 -204 -73 -74 -138 -134 -143 -134 -6 0 -25 14 -43 32 l-33 32 -50 -49 -50 -49 122 -123 122 -123 -44 -45 c-53 -54 -57 -54 -92 -13 l-26 32 -54 -49 c-29 -28 -54 -55 -56 -61 -1 -5 26 -38 62 -72 58 -56 68 -62 107 -62 40 0 47 5 145 101 151 149 154 169 46 281 l-66 69 139 139 139 140 43 -42 43 -42 -50 -50 -49 -50 -31 29 -31 29 -49 -49 -49 -50 59 -62 c52 -56 63 -63 97 -63 35 0 45 7 144 109 158 163 158 163 -44 369 -83 83 -153 152 -156 152 -3 0 -28 -20 -56 -44z" />
        <path d="M348 1020 l-118 -119 0 -48 c1 -46 4 -52 74 -125 40 -43 78 -78 83 -78 12 0 93 83 93 96 0 5 -18 28 -40 49 -22 21 -40 44 -40 50 0 13 92 105 106 105 5 0 30 -20 54 -45 l44 -45 48 47 c26 26 48 51 48 56 0 5 -30 42 -67 81 -124 133 -131 132 -285 -24z" />
      </g>
    </g>
    <text
      x="260"
      y="180"
      textAnchor="middle"
      style={{ fill: "var(--foreground)", fontSize: 14, fontWeight: 700 }}
    >
      Lattice
    </text>
    <text
      x="260"
      y="197"
      textAnchor="middle"
      style={{ fill: "var(--muted-foreground)", fontSize: 10.5 }}
    >
      federation gateway
    </text>
  </svg>
);

// A loose lattice of linked nodes: the interconnectedness motif, behind the hero.
const FIELD_NODES: [number, number][] = [
  [80, 70],
  [290, 48],
  [520, 90],
  [770, 52],
  [1020, 96],
  [1180, 60],
  [170, 250],
  [430, 285],
  [690, 250],
  [950, 295],
  [1140, 250],
  [100, 440],
  [370, 468],
  [640, 430],
  [910, 472],
  [1160, 440],
];
const FIELD_LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [11, 12],
  [12, 13],
  [13, 14],
  [14, 15],
  [0, 6],
  [1, 6],
  [2, 7],
  [2, 8],
  [3, 8],
  [4, 9],
  [5, 10],
  [6, 11],
  [7, 12],
  [7, 13],
  [8, 13],
  [9, 14],
  [10, 15],
];

/**
 * Static linked-node field behind the hero: the interconnectedness motif.
 */
const LatticeField = () => (
  <svg
    viewBox="0 0 1240 520"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 size-full"
    aria-hidden
  >
    <title>Lattice network</title>
    <g stroke="var(--primary)" strokeWidth="1" style={{ opacity: 0.1 }}>
      {FIELD_LINKS.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={FIELD_NODES[a][0]}
          y1={FIELD_NODES[a][1]}
          x2={FIELD_NODES[b][0]}
          y2={FIELD_NODES[b][1]}
        />
      ))}
    </g>
    {FIELD_NODES.map(([x, y]) => (
      <circle
        key={`${x}-${y}`}
        cx={x}
        cy={y}
        r="3.5"
        fill="var(--primary)"
        style={{ opacity: 0.22 }}
      />
    ))}
  </svg>
);

/**
 * Hero section.
 */
const HeroSection = () => (
  <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <LatticeField />
    </div>

    <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl tracking-tight md:text-6xl">
          One graph API
          <br />
          for every service.
        </h1>

        <p className="max-w-md text-lg text-muted-foreground">
          {app.name} federates your services into one graph and plans every
          query across them. A Rust gateway for GraphQL federation,
          self-hostable and Apache-2.0.
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
