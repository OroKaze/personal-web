import Link from "next/link";
import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { navigation, profile } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2>Let&apos;s build the<br /><em>next useful thing.</em></h2>
        </div>
        <a className="footer-cta" href={`mailto:${profile.email}`}>
          Start a conversation <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer navigation">
          {navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="social-links">
          {profile.linkedinUrl && <a href={profile.linkedinUrl} aria-label="LinkedIn"><span aria-hidden="true">in</span></a>}
          {profile.githubUrl && <a href={profile.githubUrl} aria-label="GitHub"><Code2 size={16} /></a>}
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
