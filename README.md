This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Analytics

O site rastreia apenas eventos de navegação e interação, sem dados pessoais:

- `buy_click`: CTA de compra, com `button_id` (`hero`, `synopsis`, `final_cta`, `desktop_navigation` ou `mobile_navigation`), rótulo e página.
- `navigation_click`: item do menu e página de destino.
- `social_link_click`: clique nos links de Instagram ou TikTok.
- `scroll_depth`: marcos de 25%, 50%, 75% e 100% em cada página.
- `page_bottom_reached`: chegou ao fim da página.
- `page_view`: navegações internas entre páginas no App Router. A primeira visualização é enviada automaticamente pelo GA4.

Copie `.env.example` para `.env.local` e informe **uma** das integrações:

- `GOOGLE_ANALYTICS_ID`: ID de medição do GA4 (`G-...`). Os eventos aparecem diretamente no GA4.
- `GOOGLE_TAG_MANAGER_ID`: ID do container GTM (`GTM-...`). No GTM, crie gatilhos de *Custom Event* para os nomes acima e envie-os à sua tag do GA4.
- `MICROSOFT_CLARITY_PROJECT_ID`: ID do projeto Microsoft Clarity. Após o consentimento, habilita gravações de sessão e heatmaps no [painel do Clarity](https://clarity.microsoft.com/).

É possível informar ambas, mas não configure no GTM uma tag GA4 que replique os mesmos eventos enviados pela integração direta; isso duplicaria os dados. Para produção, configure também consentimento de cookies/LGPD antes de ativar as tags.

O banner de consentimento já faz esse bloqueio: as tags, eventos analíticos e Clarity só são carregados após **Aceitar analytics**. A decisão fica salva no navegador; o botão **Cookies**, no canto inferior, permite revisar e revogar a preferência.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
