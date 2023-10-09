import { Container } from "@mui/material";

import InformationCard from "@/components/cards/InformationCard";
import MainLayout from "@/components/layouts/main/MainLayout";
import GoogleMap from "@/components/maps/GoogleMap";
import ContactSection from "@/components/sections/ContactSection";
import SliderSection from "@/components/sections/SliderSection";
import HomeMainSlider from "@/components/sliders/home-main/HomeMainSlider";
import { heroSlider } from "@/data/heroSlider";
import { exampleStory } from "@/example/data";

const Home = () => {
  return (
    <MainLayout
      title="Anasayfa"
      description="İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz."
      containerWidth={false}
    >
      <HomeMainSlider slides={heroSlider} />

      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "radial-gradient(#E7E7E7 10%, transparent 10%)",
          backgroundPosition: " 8px 8px",
          backgroundSize: "16px 16px",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pb: { xs: 0, sm: 5, md: 10 },
          }}
        >
          <SliderSection />
        </Container>
      </Container>

      <Container maxWidth="lg">
        <InformationCard {...exampleStory} />
      </Container>

      <Container maxWidth={false} sx={{ padding: "0!important" }}>
        <GoogleMap overlay />
      </Container>

      <Container maxWidth="md" sx={{ paddingY: 10 }}>
        <ContactSection />
      </Container>
    </MainLayout>
  );
};

export default Home;
