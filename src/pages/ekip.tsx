/* eslint-disable max-len */

import React from "react";
import { Container } from "@mui/material";
import MainLayout from "@/components/layouts/main/MainLayout";
import AnimationPage from "@/components/animations/BrushAnimation/AnimationPage";

const OurTeam: React.FC = () => {
  return (
    <MainLayout
      containerWidth="lg"
      title="Ekip"
      description="İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz."
    >
      {/* <Container maxWidth={false}>
                <Box
                    marginTop={{ xs: 5, sm: 5, md: 5, lg: 10 }}
                    marginBottom={2.5}
                >
                    <Typography variant="title2" component="h1">
                        Ekip
                    </Typography>
                </Box>
                <TeamMember
                    size="large"
                    image={chairPerson.image}
                    alt={chairPerson.name}
                    priority
                    width={{ xs: 270, sm: 360, md: 386 }}
                    height={{ xs: 350, sm: 500 }}
                    name={chairPerson.name}
                    title={chairPerson.title}
                    biography={chairPerson.biography}
                />
                <Box marginY={10}>
                    <Box marginBottom={2.5}>
                        <Typography variant="title2" component="h2">
                            Danışma Kurulu
                        </Typography>
                    </Box>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={4}
                        useFlexGap
                        flexWrap="wrap"
                    >
                        {councilMembers.map((member) => (
                            <TeamMember
                                size="large"
                                key={member.name}
                                image={member.image}
                                alt={member.alt}
                                width={{ xs: 270, sm: 300, md: 344 }}
                                height={{ xs: 300, sm: 400 }}
                                name={member.name}
                                title={member.title}
                                biography={member.biography}
                            />
                        ))}
                    </Stack>
                </Box>
            </Container> */}
      <Container
        sx={{
          textAlign: "center",
          height: "100%",
        }}
      >
        <AnimationPage children="Hazırlık Aşamasında" />
      </Container>
    </MainLayout>
  );
};

export default OurTeam;
