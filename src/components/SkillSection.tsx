import { Section, Eyebrow } from "./shared";
const tags = [
  "MÍDIA",
  "COPY",
  "CRIATIVOS",
  "FUNIS",
  "TRACKING",
  "DADOS",
  "COMPLIANCE",
  "ECONOMICS",
  "OTIMIZAÇÃO",
];
export function SkillSection() {
  return (
    <Section className="skill">
      <div className="skill-box">
        <Eyebrow>HABILIDADE TRANSFERÍVEL</Eyebrow>
        <h2>A habilidade não é ter um link.</h2>
        <h2 className="accent">
          A habilidade é saber gerar e medir aquisição.
        </h2>
        <p className="lead">
          Ao aprender a operar em um mercado competitivo e regulado, você
          desenvolve competências de mídia, copy, criativos, funis, tracking,
          análise, economics, compliance e otimização.
        </p>
        <div className="tags">
          {tags.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
