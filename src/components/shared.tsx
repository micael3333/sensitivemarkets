import type { ReactNode, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics/events";
export function Brand() {
  return (
    <div className="brand">
      <b>SENSITIVE MARKETING</b>
      <strong>ACADEMY</strong>
      <small>by All Markets</small>
    </div>
  );
}
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="container">{children}</div>
    </section>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <i />
      {children}
    </div>
  );
}
export function BuyButton({
  children = "QUERO ENTRAR PARA A ACADEMY",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const click = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent("cta_click", { label: String(children) });
    if (siteConfig.checkoutUrl) {
      trackEvent("checkout_click");
      return;
    }
    e.preventDefault();
    document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <a
      className={`button ${className}`}
      href={siteConfig.checkoutUrl || "#oferta"}
      onClick={click}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
