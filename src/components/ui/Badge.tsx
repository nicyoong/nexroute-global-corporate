interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    default: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent-dark",
    success: "bg-green-100 text-green-800",
    outline: "border border-primary/20 text-primary",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}
      role="status"
    >
      {children}
    </span>
  );
}
