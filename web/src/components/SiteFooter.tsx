import Link from "next/link";
import { SITE } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div>
        <strong>{SITE.name}</strong>
        <p>Independent community-built protocol concept. No official affiliation or endorsement implied.</p>
      </div>
      <div className="footer-links">
        <Link href="/how-it-works">How it works</Link>
        <Link href="/floor">Floor</Link>
        <Link href="/season-zero">Season 0</Link>
        <Link href="/native-terminal">Native terminal</Link>
        <a href={SITE.github}>GitHub</a>
        <a href={SITE.disclaimer}>Disclaimer</a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
