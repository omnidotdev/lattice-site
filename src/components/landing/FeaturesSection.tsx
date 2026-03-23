import {
  Cable,
  Globe,
  Layers,
  Lock,
  Network,
  Puzzle,
  RefreshCw,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Network,
    title: "Unified Omnigraph",
    description:
      "Compose multiple API services into a single, federated graph endpoint",
  },
  {
    icon: Layers,
    title: "Schema Federation",
    description:
      "Federate subgraphs from independent services into a cohesive supergraph",
  },
  {
    icon: Cable,
    title: "API Gateway",
    description:
      "Route, transform, and orchestrate requests across your service mesh",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Built in Rust for minimal latency and maximum throughput at the edge",
  },
  {
    icon: Puzzle,
    title: "Plugin System",
    description:
      "Extend functionality with composable plugins for auth, caching, and more",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description:
      "Built-in authentication, rate limiting, and schema validation",
  },
  {
    icon: Globe,
    title: "Protocol Agnostic",
    description:
      "Connect GraphQL, REST, gRPC, and WebSocket services seamlessly",
  },
  {
    icon: RefreshCw,
    title: "Live Schema Updates",
    description:
      "Hot-reload schema changes without downtime or service restarts",
  },
];

/**
 * Features section.
 */
const FeaturesSection = () => (
  <section className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl tracking-tight">
          Everything you need
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A comprehensive toolkit for building, managing, and federating API
          services into a unified omnigraph
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="border-border/50 bg-card/50">
            <CardHeader className="pb-2">
              <Icon className="mb-2 size-5 text-primary" />
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
