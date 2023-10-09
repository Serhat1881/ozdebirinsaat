import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

import MainLayout from "@/components/layouts/main/MainLayout";
import AwardsSection from "@/components/sections/AwardsSection";
import InformationWithImageSection from "@/components/sections/InformationWithImageSection";

const WhyUs: React.FC = () => {
  const theme = useTheme();

  return (
    <MainLayout
      containerWidth={false}
      title="Neden Biz?"
      description="İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz."
      image="/images/"
    >
      <Container maxWidth="lg">
        <Stack spacing={3} marginY={{ xs: 5, sm: 5, md: 5, lg: 10 }}>
          <Typography variant="title2" component="h1">
            Neden Biz?
          </Typography>
          <Typography variant="body3">
            <b>Deneyim ve Uzmanlık </b>
            Uzun yıllara dayanan deneyimimiz ve sektördeki uzmanlığımızla, her
            türlü inşaat projesini başarıyla yönetiyoruz. İşlerimizi titizlikle
            planlayarak, yüksek kaliteli malzemelerle gerçekleştiriyor ve
            projelerinizi istediğiniz şekilde hayata geçiriyoruz. Müşteri
            memnuniyeti ve güvenilirlik bizim için önceliklerdir. Sizlere
            profesyonel hizmet sunarak, inşaat ve tadilat ihtiyaçlarınızı
            karşılamak için buradayız.
          </Typography>
        </Stack>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          marginRight: 0,
          paddingRight: { xs: 2, md: "0!important" },
          maxWidth: `calc(100vw - calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2))!important`,
        }}
      >
        <InformationWithImageSection
          direction="row"
          image="/images/why-us/why-us.webp"
          priority
          sizes={`(max-width: ${theme.breakpoints.values.md}px) 100vw, 514px`}
          title="Çeşitli hizmetlerimizle, seramikten çilingire, boya işlerinden su tesisatına kadar geniş bir yelpazede sizin yanınızdayız. Her projeye özel çözümler sunarak, evlerinizi ve işyerlerinizi istediğiniz şekilde dönüştürüyoruz. Kaliteli işçilik, uygun fiyatlar ve müşteri memnuniyeti, sunduğumuz hizmetlerin temelini oluşturuyor. İhtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız."
          description="Her ihtiyaca uygun çözümler sunarak projenizi tek bir çatı altında tamamlayabiliriz."
        />
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          marginLeft: 0,
          paddingLeft: { xs: 2, md: "0!important" },
          maxWidth: `calc(100vw - calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2))!important`,
        }}
      >
        <Box
          bgcolor="black.main"
          marginY={{ xs: 4, md: 8 }}
          display="flex"
          justifyContent="space-evenly"
          flexDirection="column"
          padding={{ xs: 4, md: 8 }}
          sx={{
            paddingLeft: {
              xs: 4,
              md: `calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2)!important`,
            },
          }}
        >
          <Typography variant="body3" color="white.main" lineHeight={1.5}>
            <b>Kalite ve güvence, </b>
            işimizin temel taşlarıdır. Projelerimizde en yüksek kalite
            malzemeleri kullanarak, işlerimizi titizlikle planlar ve uygularız.
            Her aşamada kalite kontrolü yaparak sonuçların beklentilerinizi
            aşmasını sağlarız. Söz verdiğimiz işi zamanında teslim eder ve
            müşterilerimize güvence sunarız.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box>
          <Box bgcolor="white.main" zIndex={1} paddingBottom={8}>
            <Typography variant="title1">
              <b>Maliyet-Etkinlik </b>Rekabetçi fiyatlarımızla kaliteli hizmet
              sunuyoruz. Bütçenizi korurken, projelerinizi istediğiniz gibi
              hayata geçirmenize yardımcı oluyoruz. Güvenilir ve ekonomik
              çözümler sunuyoruz.
            </Typography>
          </Box>

          <AwardsSection />

          <Box
            bgcolor="white.main"
            textAlign="center"
            paddingTop={{ xs: 22, md: 32 }}
            paddingBottom={{ xs: 6, md: 12 }}
          >
            <Typography variant="title1">
              <b>Müşteri memnuniyeti, </b>işimizin merkezindedir. Projelerinizi
              titizlikle yönetir, isteklerinizi öncelik olarak kabul ederiz.
              Sizin memnuniyetiniz, en büyük başarımızdır.
            </Typography>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default WhyUs;
