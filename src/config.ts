/**
 * Configurações que mudam entre o desenvolvimento e a publicação.
 *
 * Você pode preencher os valores diretamente abaixo ou criar variáveis com os
 * mesmos nomes no painel do Cloudflare Pages. As variáveis do Cloudflare evitam
 * que seja necessário alterar o código quando o link da Kirvano ficar pronto.
 */
export const siteConfig = {
  checkoutUrl: import.meta.env.VITE_CHECKOUT_URL ?? "",
  vslUrl: import.meta.env.VITE_VSL_URL ?? "",
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? "",
};
