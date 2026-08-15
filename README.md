# Sensitive Marketing Academy — iGaming Edition

Landing page React + Vite + TypeScript da iniciativa All Markets. O projeto é estático, responsivo e não possui backend, autenticação ou banco de dados.

## Desenvolvimento local

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`.

## Cloudflare Pages

Configure o projeto assim:

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`

Não são necessárias variáveis de ambiente no estado atual.

## Configuração comercial e VSL

Edite somente `src/config.ts`:

- `checkoutUrl`: URL do checkout usada por todos os CTAs de compra;
- `vslUrl`: URL incorporável do YouTube, Vimeo ou player externo;
- `whatsappUrl`: URL de contato futura.

Enquanto `checkoutUrl` estiver vazio, os CTAs levam à seção da oferta. Enquanto `vslUrl` estiver vazio, o card exibe o placeholder profissional.

## Analytics

Edite `src/analytics/config.ts` para preencher `metaPixelId`, `ga4Id` e/ou `gtmId`. IDs vazios não carregam nem enviam dados. Os eventos preparados em `src/analytics/events.ts` são: `page_view`, `cta_click`, `vsl_play` e `checkout_click`. A instalação dos scripts de cada provedor deve ser feita quando os IDs e o consentimento aplicável estiverem definidos.

## Imagens e marca

Use `public/assets/` para `logo.svg`, `founder.jpg`, `proof-01.jpg`, `proof-02.jpg`, `proof-03.jpg` e `vsl-thumbnail.jpg`. Veja `public/assets/README.md`. A ausência desses arquivos não quebra a página: a área de autoridade usa placeholders neutros.

## Itens pendentes antes da publicação

1. Fornecer a URL definitiva do checkout e da VSL.
2. Adicionar logo, foto do fundador e provas visuais autorizadas.
3. Confirmar o período de acesso da Turma Fundadora (há um `TODO` em `src/components/FAQ.tsx`).
4. Definir URLs reais para Termos, Privacidade e Contato.
5. Configurar domínio/canonical e, se desejado, IDs de analytics com a solução de consentimento apropriada.
