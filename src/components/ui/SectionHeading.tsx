type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
