import {
  Target,
  FileSearch,
  ShieldCheck,
  PanelsTopLeft,
  ChartNoAxesCombined,
  Expand,
} from "lucide-react";
import { Section, Eyebrow } from "./shared";
const data = [
  [
    Target,
    "Escolher uma boa oferta",
    "Entenda CPA, Revenue Share, modelos híbridos, critérios de qualificação e o que realmente existe por trás de uma proposta de afiliação.",
  ],
  [
    FileSearch,
    "Ler um contrato de afiliado",
    "Aprenda a identificar obrigações, critérios de pagamento, tracking, relatórios, prazos e mecanismos de revisão de divergências.",
  ],
  [
    ShieldCheck,
    "Anunciar dentro das regras",
    "Entenda compliance antes de colocar dinheiro em mídia e aprenda a operar respeitando as exigências do setor e dos canais.",
  ],
  [
    PanelsTopLeft,
    "Construir campanhas",
    "Trabalhe oferta, ângulo, criativo, landing page, mídia e tracking como partes de uma mesma operação.",
  ],
  [
    ChartNoAxesCombined,
    "Acompanhar seus resultados",
    "Organize sua aquisição para saber de onde veio o tráfego, quanto custou, o que converteu e como sua campanha está performando.",
  ],
  [
    Expand,
    "Otimizar e escalar",
    "Aprenda a decidir quando parar, ajustar, manter ou aumentar investimento com base em números.",
  ],
];
export function Benefits() {
  return (
    <Section>
      <Eyebrow>RESULTADO DA FORMAÇÃO</Eyebrow>
      <h2>O que você vai sair sabendo fazer</h2>
      <div className="three cards benefits">
        {data.map(([Icon, title, text], i) => {
          const I = Icon as typeof Target;
          return (
            <article key={String(title)}>
              <span>0{i + 1}</span>
              <I />
              <h3>{String(title)}</h3>
              <p>{String(text)}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
