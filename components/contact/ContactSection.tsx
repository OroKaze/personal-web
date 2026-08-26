import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { profile } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">/ 06 — Next step</p>
            <h2>Let&apos;s make<br /><em>an impact.</em></h2>
            <p>Have an automation challenge, an AI product to shape, or a team that cares about quality? I&apos;d like to hear about it.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
          <div className="contact-details">
            <div><span className="mono-label">Based in</span><p><MapPin size={15} aria-hidden="true" /> {profile.location}</p></div>
            <div><span className="mono-label">Direct line</span><p><Mail size={15} aria-hidden="true" /> {profile.phone}</p></div>
            <MagneticButton href="/resume.pdf" variant="outline" download><Download size={16} aria-hidden="true" /> Download resume</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
