import Link from "next/link";
import { NAV_LINKS, SITE } from "@/config/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="OK Brokers home">
        <span className="brand-mark">OK</span>
        <span>{SITE.name}</span>
      </Link>
      <nav aria-label="Primary navigation">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
