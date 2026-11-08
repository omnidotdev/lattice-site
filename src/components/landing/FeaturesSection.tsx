const strip = [
  "Federation v2",
  "REST connectors",
  "Subscriptions + @defer",
  "WASI plugins",
  "MCP endpoint",
  "Apache-2.0",
];

const features = [
  {
    title: "Query planning",
    tag: "federation v2",
    description:
      "Plans and executes one client query across many subgraphs, fetching only what each service owns and stitching the result.",
  },
  {
    title: "Any service, one graph",
    tag: "graphql + rest",
    description:
      "Federate GraphQL subgraphs and REST APIs side by side. Map a field to an HTTP endpoint and Lattice plans and calls it like any other subgraph.",
  },
  {
    title: "Real-time",
    tag: "subscriptions + @defer",
    description:
      "WebSocket subscriptions across services, and @defer so slow fields stream in after the fast ones.",
  },
  {
    title: "Governed at the edge",
    tag: "jwt · limits · apq",
    description:
      "Directive auth, rate limiting, depth and complexity caps, and persisted queries, enforced before a subgraph is ever hit.",
  },
  {
    title: "Built to extend",
    tag: "wasm · mcp · contracts",
    description:
      "WASI plugins in any language, a native MCP endpoint, schema contracts, response caching, Prometheus, and OpenTelemetry.",
  },
];

/**
 * Features section: a compact capability strip over a spec-style list.
 */
const FeaturesSection = () => (
  <section className="px-6 py-10">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap gap-x-7 gap-y-2 border-border/60 border-y py-4 font-mono text-muted-foreground text-xs">
        {strip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="py-16">
        <div className="grid">
          {features.map(({ title, tag, description }) => (
            <div
              key={title}
              className="grid gap-6 border-border/60 border-t py-5 last:border-b md:grid-cols-[210px_1fr]"
            >
              <div>
                <h3 className="font-semibold text-lg tracking-tight">
                  {title}
                </h3>
                <span className="mt-2 inline-block font-mono text-primary text-xs">
                  {tag}
                </span>
              </div>
              <p className="max-w-[60ch] text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
