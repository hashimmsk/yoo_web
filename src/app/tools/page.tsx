import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Research Tools",
  description:
    "Interactive statistical analysis and clinical trial visualization tools developed in support of biostatistics research.",
};

export default function ToolsPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Research Tools"
        subtitle="Interactive applications for statistical analysis, clinical trial visualization, and predictive modeling."
      />

      <p className="text-base text-navy-700 leading-relaxed mb-10 max-w-3xl">
        These tools support research in biostatistics and clinical trial design.
        The ANOVA and Swimmer Plot applications provide interactive statistical
        visualization with reproducible R code generation, while DataNuri offers
        neural network-based survival prediction for glioblastoma trial
        endpoints.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} featured />
        ))}
      </div>
    </PageWrapper>
  );
}
