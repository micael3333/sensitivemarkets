import { Play, ShieldCheck, TrendingUp, Activity } from "lucide-react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics/events";
import { BuyButton, Eyebrow, Section } from "./shared";
export function Hero() {
  return (
    <Section id="top" className="hero">
      <div className="hero-grid">
        <div>
          <Eyebrow>SENSITIVE MARKETING ACADEMY · iGAMING EDITION</Eyebrow>
          <h1>
            Entre no mercado de iGaming como afiliado — e aprenda a{" "}
            <em>operar como profissional.</em>
          </h1>
          <p className="lead">
            Entenda como funciona a indústria, escolha boas ofertas, anuncie
            dentro das regras, acompanhe suas campanhas e aprenda a transformar
            tráfego em uma operação estruturada.
          </p>
          <div className="hero-actions">
            <BuyButton />
            <a className="text-link" href="#operacao">
              VER COMO FUNCIONA ↓
            </a>
          </div>
          <div className="price-line">
            <strong>Turma Fundadora · R$ 697</strong>
            <span>
              Formação profissional. Sem promessa de renda. Sem “método
              secreto”.
            </span>
          </div>
        </div>
        <div className="video-shell">
          {siteConfig.vslUrl ? (
            <iframe
              src={siteConfig.vslUrl}
              title="Sensitive Marketing Academy"
              allowFullScreen
            />
          ) : (
            <button
              className="video-placeholder"
              onClick={() => trackEvent("vsl_play")}
              aria-label="Reproduzir apresentação"
            >
              <span className="video-top">
                <span>VSL / APRESENTAÇÃO</span>
                <span>16:9</span>
              </span>
              <span className="play">
                <Play fill="currentColor" />
              </span>
              <strong>
                Conheça a Sensitive
                <br />
                Marketing Academy
              </strong>
              <small>Apresentação em breve</small>
            </button>
          )}
          <div className="video-stats">
            <span>
              <ShieldCheck /> Compliance first
            </span>
            <span>
              <Activity /> Data driven
            </span>
            <span>
              <TrendingUp /> Operator mindset
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
