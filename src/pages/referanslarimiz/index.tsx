import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";

import MainLayout from "@/components/layouts/main/MainLayout";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { workshops } from "@/data/referans";

export type Filter = "all" | "current" | "past";

const Bulten: React.FC = () => {
  const [filter] = useState<Filter>("all");
  const [loading] = useState(false);

  return (
    <MainLayout
      containerWidth={false}
      title="Referanslarımız"
      description="İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz."
    >
      <Box height="100%" display="flex" flexDirection="column">
        <Container maxWidth="lg">
          <Box
            marginTop={{ xs: 5, lg: 10 }}
            marginBottom={5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="title2" component="h1">
              Referanslarımız
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ flex: 1 }}>
          <NewsletterSection
            data={workshops}
            filter={filter}
            loading={loading}
          />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Bulten;
