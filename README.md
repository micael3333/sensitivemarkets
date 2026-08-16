# Sensitive Marketing Academy — iGaming Edition

Landing page React + Vite + TypeScript da iniciativa All Markets. O projeto é estático, responsivo e não possui backend, autenticação ou banco de dados.

## Desenvolvimento local

Requer Node.js 20.

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

### O que aparece no print enviado

O deploy **não está falhando agora**. No print, a linha mais recente de
`Production` está com um check verde e possui uma URL `pages.dev`. As duas
linhas vermelhas são tentativas antigas feitas a partir do primeiro commit,
quando o repositório ainda continha somente o README.

### Configuração do build

No projeto `sensitivemarkets`, abra **Settings → Builds & deployments** e use:

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Node.js version:** `20` (o repositório também contém `.node-version`)

Depois, acione **Deployments → Create deployment → Retry deployment** apenas
se o commit atual ainda não aparecer com o check verde. O arquivo
`public/_redirects` garante que a aplicação React também seja servida
corretamente ao acessar uma rota diretamente.

### Conectar `allmarkets.xyz.br`

1. Abra **Custom domains** dentro do projeto `sensitivemarkets` — não a área
   geral de DNS.
2. Clique em **Set up a custom domain**.
3. Digite `allmarkets.xyz.br` e confirme.
4. Aguarde o status ficar **Active**. Como o DNS já está no Cloudflare, o painel
   normalmente cria ou orienta o registro necessário.
5. Opcionalmente, repita com `www.allmarkets.xyz.br` e configure o domínio
   preferido no painel.

O canonical e o Open Graph do projeto já apontam para
`https://allmarkets.xyz.br/`.

## Configuração comercial e VSL

Há duas formas de cadastrar a URL da Kirvano.

**Recomendado — pelo Cloudflare:** em **Settings → Environment variables**, crie
`VITE_CHECKOUT_URL` e cole o link completo fornecido pela Kirvano. Marque a
variável para `Production` e faça um novo deploy. Todos os botões passarão a
abrir esse endereço.

**Alternativa — pelo código:** crie um arquivo `.env` a partir do
`.env.example`, preencha `VITE_CHECKOUT_URL` e publique a alteração. O arquivo
`src/config.ts` centraliza:

- `checkoutUrl`: URL do checkout usada por todos os CTAs de compra;
- `vslUrl`: URL incorporável do YouTube, Vimeo ou player externo;
- `whatsappUrl`: URL de contato futura.

As variáveis disponíveis também estão documentadas em `.env.example`. Enquanto
`checkoutUrl` estiver vazio, os CTAs levam à seção da oferta. Enquanto `vslUrl`
estiver vazio, o card exibe o placeholder profissional. Não é necessário
incorporar a página inteira da Kirvano no site: o botão abre a URL segura do
checkout fornecida pela plataforma.

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
