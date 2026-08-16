import { Compass, RefreshCw } from "lucide-react";
import { Section, Eyebrow } from "./shared";
export function Audience() {
  return (
    <Section>
      <Eyebrow>PONTO DE PARTIDA</Eyebrow>
      <h2>Talvez você esteja em um destes dois momentos.</h2>
      <div className="two cards audience">
        <article>
          <Compass />
          <span>01 / COMEÇANDO</span>
          <h3>Quero entrar no iGaming</h3>
          <p>
            Você vê oportunidade no mercado, mas ainda não sabe por onde
            começar, com quem trabalhar, como funciona a remuneração, quanto
            precisa investir, onde anunciar ou o que realmente é permitido
            fazer.
          </p>
          <strong>
            Você vê o mercado. Só não sabe como entrar nele da forma certa.
          </strong>
        </article>
        <article>
          <RefreshCw />
          <span>02 / RECOMEÇANDO</span>
          <h3>Eu já tentei</h3>
          <p>
            Você já divulgou uma oferta, colocou dinheiro em tráfego ou começou
            como afiliado, mas ficou perdido entre tracking, atribuição,
            contrato, pagamento e resultado.
          </p>
          <strong>Você estava divulgando. Não operando.</strong>
        </article>
      </div>
      <p className="center-callout">
        Nos dois casos, o problema é o mesmo:
        <br />
        <b>você ainda não tem uma operação estruturada.</b>
      </p>
    </Section>
  );
}
