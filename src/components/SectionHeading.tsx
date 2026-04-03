interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base text-muted max-w-2xl">{subtitle}</p>
      )}
      <div className={`mt-3 h-1 w-16 bg-accent rounded ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
