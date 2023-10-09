import { Box, Container, Typography } from "@mui/material";
import React from "react";

import DisplayImage from "@/components/displays/DisplayImage";
import MainLayout from "@/components/layouts/main/MainLayout";
import GoogleMap from "@/components/maps/GoogleMap";
import ContactSection from "@/components/sections/ContactSection";

const Visit: React.FC = () => {
  return (
    <MainLayout
      containerWidth={false}
      title="İletişim"
      description="İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz."
    >
      <Container maxWidth="lg">
        <Box marginY={{ xs: 5, sm: 5, md: 5, lg: 10 }}>
          <Typography variant="title2" component="h1">
            İletişim
          </Typography>
        </Box>
      </Container>

      <GoogleMap />

      <Container maxWidth="lg">
        <Box marginY={{ xs: 5, sm: 5, md: 5, lg: 10 }}>
          <Typography variant="body3">
            Çeşitli hizmetlerimizle, seramikten çilingire, boya işlerinden su
            tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye
            özel çözümler sunarak, evlerinizi ve işyerlerinizi istediğiniz
            şekilde dönüştürüyoruz. Kaliteli işçilik, uygun fiyatlar ve müşteri
            memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor.
            İhtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız.
          </Typography>
        </Box>
      </Container>

      <Container>
        <Box marginY={{ xs: 5, sm: 5, md: 5, lg: 10 }}>
          <DisplayImage
            width={1}
            height={{ xs: 200, md: 359 }}
            imagePath="/images/workshops/hizmetlerimg/istanbul-izalasyon-ustasi.webp"
            alt="İstanbul İzalasyon Ustası ozdebirinsaat.com özdebirinsaat.com"
            imgStyle={{ objectFit: "contain" }}
          />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          marginY={{ xs: 5, sm: 5, md: 5, lg: 10 }}
          paddingX={{ sm: 0, md: 10, lg: 15 }}
        >
          <ContactSection />
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Visit;
