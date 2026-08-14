import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Card({
  children,
  className = "",
  href,
  onClick,
  ariaLabel,
}: CardProps) {
  const baseClasses =
    "bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden";

  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} tabIndex={0}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        type="button"
      >
        {children}
      </button>
    );
  }

  return <div className={classes}>{children}</div>;
}
