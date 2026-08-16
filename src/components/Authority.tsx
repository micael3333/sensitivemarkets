import { Section, Eyebrow } from "./shared";
const proofs = [
  ["/assets/founder.jpg", "Foto do fundador"],
  ["/assets/proof-01.jpg", "Prova / reunião"],
  ["/assets/proof-02.jpg", "Prova / validação"],
  ["/assets/proof-03.jpg", "Prova / certificado"],
];
function Proof({ src, label }: { src: string; label: string }) {
  return (
    <div className="proof">
      <img
        src={src}
        alt={label}
        onError={(e) => {
          e.currentTarget.hidden = true;
        }}
      />
      <span>
        {label}
        <small>IMAGEM A INSERIR</small>
      </span>
    </div>
  );
}
export function Authority() {
  return (
    <Section>
      <div className="authority">
        <div>
          <Eyebrow>QUEM CONSTRUIU A FORMAÇÃO</Eyebrow>
          <h2>Conhecimento de quem entrou pela mesma porta que você.</h2>
          <p className="lead">
            Eu também comecei olhando para esse mercado como afiliado e
            rapidamente percebi que existia uma distância enorme entre ter uma
            oferta e saber operar uma oferta.
          </p>
          <p>
            Tracking, atribuição, contratos, pagamentos, aquisição, campanhas,
            compliance e relacionamento com operadores fazem parte de uma
            estrutura que raramente aparece quando alguém simplesmente diz “seja
            afiliado”.
          </p>
          <p>
            Com o tempo, passei a estudar e operar essa cadeia de forma
            profissional, participar de reuniões de otimização, trabalhar com
            empresas do setor e construir uma visão mais completa sobre
            aquisição em iGaming.
          </p>
          <strong>
            A Sensitive Marketing Academy nasce para encurtar esse caminho para
            quem está entrando agora.
          </strong>
        </div>
        <div className="proof-grid">
          {proofs.map((x) => (
            <Proof key={x[1]} src={x[0]} label={x[1]} />
          ))}
        </div>
      </div>
    </Section>
  );
}
