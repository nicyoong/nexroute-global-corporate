import Container from "./Container";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const headingClasses = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClasses} ${className}`} id={id}>
      {eyebrow && (
        <span
          className="inline-block text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3"
          aria-hidden="true"
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-lg text-primary-600 max-w-3xl ${headingClasses}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
