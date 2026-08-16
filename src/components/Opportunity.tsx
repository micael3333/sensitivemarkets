import { BriefcaseBusiness, FileCheck2 } from "lucide-react";
import { Section, Eyebrow } from "./shared";
export function Opportunity() {
  return (
    <Section className="opportunity">
      <div className="op-grid">
        <div>
          <Eyebrow>OPORTUNIDADE COMERCIAL</Eyebrow>
          <h2>
            Você não precisa terminar a formação sem saber com quem operar.
          </h2>
          <p className="lead">
            Além da formação, alunos elegíveis poderão participar de processos
            de qualificação para oportunidades comerciais de afiliação
            disponibilizadas através da rede da Academy.
          </p>
          <div className="badges">
            <span>
              <BriefcaseBusiness /> OPERAÇÃO REAL
            </span>
            <span>
              <FileCheck2 /> CONDIÇÕES COMERCIAIS DOCUMENTADAS
            </span>
          </div>
        </div>
        <div className="cpa-card">
          <small>MODELO COMERCIAL</small>
          <strong>
            €20 <i>CPA</i>
          </strong>
          <p>por aquisição válida*</p>
          <hr />
          <p>
            Também poderão existir modelos com Revenue Share, conforme as
            condições comerciais aplicáveis.
          </p>
          <div className="logo-slot">ÁREA PARA LOGO AUTORIZADO</div>
        </div>
      </div>
      <p className="disclaimer">
        *O acesso às oportunidades não é garantido. Está sujeito à
        elegibilidade, qualificação, aprovação pelo operador, critérios de
        aquisição válida e condições comerciais vigentes.
      </p>
    </Section>
  );
}
