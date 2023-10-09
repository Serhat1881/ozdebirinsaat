/* eslint-disable react/no-danger */
import Head from "next/head";
import React from "react";

import { mainSchema } from "@/schemas/data";

interface AppHeadProps {
  title?: string;
  description?: string;
  metaKeywords?: string;
  metaAuthor?: string;
  metaOgImage?: string;
  schemaMarkup?: object;
}

const AppHead: React.FC<AppHeadProps> = ({
  title,
  description,
  metaKeywords,
  metaAuthor,
  metaOgImage,
  schemaMarkup,
}) => {
  const pageTitle = title || "Özdebir İnşaat";
  const pageDescription =
    description ||
    `İstanbul Özdebir İnşaat & Çilingir olarak, İstanbul'da hizmet vermekteyiz. İstanbul'un her yerine 7/24 hizmet vermekteyiz. Çeşitli hizmetlerimizle, seramikten çilingire, boya işlerinden su tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye özel çözümler sunarak, evlerinizi ve işyerlerinizi istediğiniz şekilde dönüştürüyoruz. Kaliteli işçilik, uygun fiyatlar ve müşteri memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor. İhtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız.
    `;
  const pageKeywords =
    metaKeywords ||
    "Özdebir İnşaat & Çilingir, seramik, çilingir, boya, sıva, duşakabin, su tesisatı, darire tadilatı, çatı izalasyonu, parke, laminant, elektirk tesisatı, kamera sistemleri, sineklik sistemleri, ozdebirinsaat.com özdebirinşaat.com";
  const pageAuthor = metaAuthor || "Özdebir İnşaat & Çilingir";
  const pageOgImage = metaOgImage || "/images/logo.png";
  const structuredDataSchema = schemaMarkup || mainSchema || "";

  return (
    <Head>
      <title key="title">{pageTitle}</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={pageDescription} key="description" />
      <meta name="keywords" content={pageKeywords} key="keywords" />
      <meta name="author" content={pageAuthor} key="author" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={pageTitle} key="og-title" />
      <meta
        property="og:description"
        content={pageDescription}
        key="og-description"
      />
      <meta property="og:image" content={pageOgImage} key="og-image" />
      <meta property="og:type" content="website" key="og-type" />
      <meta property="og:locale" content="tr_TR" key="og-locale" />

      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataSchema),
        }}
      />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default AppHead;
