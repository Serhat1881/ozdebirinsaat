import { Box, Stack, Typography } from "@mui/material";
import NextImage from "next/image";
import React from "react";

import theme from "@/theme";

type BigImageInformationProps = {
  image: string;
  priority?: boolean;
  sizes?: string;
  title: string;
  description: string;
};

type ColumnInformationProps = {
  secondDescription: string;
} & Omit<BigImageInformationProps, "title">;

type InformationWithImageSectionProps =
  | InformationWithImageSectionPropsDefault
  | InformationWithImageSectionPropsColumn
  | InformationWithImageSectionPropsRow;

interface InformationWithImageSectionPropsColumn
  extends ColumnInformationProps {
  direction: "column";
}

interface InformationWithImageSectionPropsRow extends BigImageInformationProps {
  direction: "row";
}

type InformationWithImageSectionPropsDefault =
  InformationWithImageSectionPropsRow & {
    direction?: "column" | "row";
  };

const BigImageInformation: React.FC<BigImageInformationProps> = ({
  image,
  priority = false,
  sizes,
  title,
  description,
}) => {
  return (
    <Box marginY={10}>
      <Stack direction="row" flexWrap={{ xs: "wrap", md: "nowrap" }}>
        <Box
          position="relative"
          minWidth={{ xs: 1, md: 514 }}
          height={{ xs: 350, md: 683 }}
        >
          <NextImage
            src={image}
            fill
            priority={priority}
            sizes={sizes}
            style={{
              objectFit: "cover",
            }}
            alt="Taş Ev İzmir Çeşme Alaçatı Hafriyat"
          />
        </Box>

        <Box
          bgcolor="black.main"
          marginY={{ xs: 0, md: 8 }}
          display="flex"
          gap={2}
          flexDirection="column"
          padding={{ xs: 4, md: 8 }}
          sx={{
            paddingRight: {
              xs: 4,
              md: `calc(calc(100vw - ${theme.breakpoints.values.lg}px) / 2)!important`,
            },
          }}
        >
          <Typography
            variant="body3"
            component="h2"
            color="white.main"
            lineHeight={1.5}
            marginBottom={{ xs: 4, md: 0 }}
          >
            {title}
          </Typography>

          <Typography variant="title1" color="white.main" lineHeight={2}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

const ColumnInformation: React.FC<ColumnInformationProps> = ({
  image,
  priority = false,
  sizes,
  description,
  secondDescription,
}) => {
  return (
    <Box>
      <Box position="relative">
        <Box
          bgcolor="white.main"
          position="absolute"
          zIndex={1}
          marginX={{ xs: 3, md: 6 }}
          padding={{ xs: 0, sm: 3 }}
          sx={{ transform: "translateY(-70%)" }}
        >
          <Typography variant="body3" textAlign="center">
            {description ||
              `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`}
          </Typography>
        </Box>
      </Box>

      <Box position="relative" height={266}>
        <NextImage
          src={image}
          fill
          priority={priority}
          alt="Hikayemiz"
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box bgcolor="white.main" padding={3}>
        <Typography variant="title1" textAlign="center">
          {secondDescription}
        </Typography>
      </Box>
    </Box>
  );
};

const InformationWithImageSection: React.FC<
  InformationWithImageSectionProps
> = ({
  direction,
  title,
  description,
  image,
  priority = false,
  sizes = "100vw",
  secondDescription,
}: any) => {
  if (direction === "row") {
    return (
      <BigImageInformation
        title={title}
        description={description}
        image={image}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  if (direction === "column") {
    return (
      <ColumnInformation
        secondDescription={secondDescription}
        description={description}
        image={image}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return null;
};

export default InformationWithImageSection;
