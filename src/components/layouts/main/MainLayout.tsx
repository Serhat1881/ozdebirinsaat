import { Box, Container } from "@mui/material";
import Script from "next/script";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

import AppHead from "@/components/partials/AppHead";
import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";

interface MainLayoutProps {
  containerWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  paddingY?: number | string | object;
  showSocials?: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  schemaMarkup?: object;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  containerWidth = "xl",
  paddingY = 0,
  showSocials = true,
  children,
  title,
  description,
  image,
  schemaMarkup,
}) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
                `}
      </Script>

      <AppHead
        title={`${title} - Özdebir İnşaat`}
        description={description}
        metaOgImage={image}
        schemaMarkup={schemaMarkup}
      />

      <Header />

      <Container
        component="main"
        maxWidth={containerWidth}
        sx={{ paddingX: "0!important", paddingY, flex: 1 }}
      >
        {children}
        <Analytics />
      </Container>

      <Footer showSocials={showSocials} />
    </Box>
  );
};

export default MainLayout;
