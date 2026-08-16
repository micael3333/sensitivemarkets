import { ChevronDown } from "lucide-react";
import { Section, Eyebrow } from "./shared";
const faqs = [
  [
    "Nunca trabalhei com iGaming. Serve para mim?",
    "Sim. A formação começa pela estrutura da indústria e avança progressivamente até aquisição, acompanhamento e otimização.",
  ],
  [
    "Já trabalho com tráfego pago. Ainda vale a pena?",
    "Sim. Quem já conhece mídia tende a avançar rapidamente pelos fundamentos e poderá concentrar atenção nas particularidades de ofertas, contratos, tracking, economics, compliance e operação em iGaming.",
  ],
  [
    "Preciso ter dinheiro para anunciar?",
    "Você pode estudar antes de iniciar uma campanha. Porém, aquisição paga exige investimento e nenhum valor de teste garante resultado.",
  ],
  [
    "Vou aprender Google Ads e Meta Ads?",
    "A formação aborda canais de aquisição, construção de campanhas e critérios de operação, respeitando as regras e requisitos aplicáveis ao setor.",
  ],
  [
    "Isso é um curso para aprender a apostar?",
    "Não. A formação é sobre publicidade, aquisição de clientes, tracking, análise, operação e compliance dentro da indústria de iGaming. Não ensinamos pessoas a apostar.",
  ],
  [
    "A parceria com operador é garantida?",
    "Não. Alunos elegíveis poderão participar de processos de qualificação para oportunidades disponibilizadas através da rede da Academy. Aprovação e condições dependem do operador.",
  ],
  [
    "Vou aprender tracking?",
    "Sim. Um dos objetivos é permitir que você estruture uma visão própria da aquisição e deixe de depender apenas da lógica “enviei tráfego e estou esperando aparecer”.",
  ], // TODO: atualizar os detalhes de acesso antes da abertura oficial.
  [
    "Por quanto tempo tenho acesso?",
    "Detalhes de acesso da Turma Fundadora serão informados antes da abertura oficial.",
  ],
];
export function FAQ() {
  return (
    <Section id="faq">
      <Eyebrow>DÚVIDAS</Eyebrow>
      <h2>Perguntas frequentes</h2>
      <div className="faq">
        {faqs.map((x, i) => (
          <details key={x[0]}>
            <summary>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{x[0]}</b>
              <ChevronDown />
            </summary>
            <p>{x[1]}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
