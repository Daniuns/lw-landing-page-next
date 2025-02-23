export const runtime = "edge"; // Garante compatibilidade em produção

export const GET = () =>
  new Response(
    `User-agent: * 
Allow: / 
Sitemap: https://lewis-helderish.vercel.app/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
