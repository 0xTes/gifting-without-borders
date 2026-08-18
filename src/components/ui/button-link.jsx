import Link from "next/link";

export default function ButtonLink({
  children,
  className = "",
  href,
  variant = "primary",
}) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href}>
      {children}
    </Link>
  );
}
