import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Closing call to action: the taproot pairing story.
 */
const CTASection = () => (
  <section className="px-6 pt-4 pb-24">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary/10 px-8 py-8">
        <p className="max-w-[52ch] text-lg">
          <span className="font-semibold text-primary">
            Pairs with taproot.
          </span>{" "}
          Point taproot at Postgres for an instant GraphQL subgraph, then let{" "}
          {app.name} federate it alongside the rest. One Rust, open-source pair,
          from database to supergraph.
        </p>

        <Button size="lg" asChild>
          <a href={app.links.docs} target="_blank" rel="noopener noreferrer">
            Get started
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
