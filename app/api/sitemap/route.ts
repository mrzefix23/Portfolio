import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yanismahdi.com"; // Remplace par ton domaine réel

  // Liste des pages statiques à inclure
  const pages = ["/"]; // Ajoute d'autres pages ici

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${page === "/" ? "1.0" : "0.8"}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
