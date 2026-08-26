import { Reveal } from "@/components/animations/Reveal";
import { skillGroups } from "@/lib/constants";

type SkillGroupData = (typeof skillGroups)[number];

export function SkillGroup({ group, index }: { group: SkillGroupData; index: number }) {
  return (
    <Reveal className="skill-group" delay={index * 0.08}>
      <div className="skill-group-heading"><span className="mono-label">0{index + 1}</span><h3>{group.title}</h3></div>
      <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
    </Reveal>
  );
}

export function SkillsSection() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="container">
        <div className="section-heading split-heading">
          <Reveal><p className="eyebrow">/ 03 — Capabilities</p></Reveal>
          <Reveal delay={0.08}><h2>Tools are only useful<br />when they <em>serve the work.</em></h2></Reveal>
        </div>
        <div className="skills-grid">{skillGroups.map((group, index) => <SkillGroup key={group.title} group={group} index={index} />)}</div>
      </div>
    </section>
  );
}
