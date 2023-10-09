import { Box } from "@mui/material";
import NextImage from "next/image";
import React from "react";

import DisplayImage from "../displays/DisplayImage";

const AwardsSection: React.FC = () => {
  return (
    <Box position="relative" height={341}>
      <NextImage
        src="/images/why-us/painter.webp"
        fill
        alt="Neden Biz?"
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Box
        position="relative"
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
        marginX="165px"
        sx={{ transform: "translateY(85%)" }}
      >
        <Box
          position="relative"
          minWidth={304 * 0.56}
          height={304}
          marginRight={1}
        >
          <NextImage
            src="/images/awards/pipes.webp"
            fill
            alt="ozdebirinsaat pipes image"
            sizes="20vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          position="relative"
          minWidth={304 * 0.56}
          height={304}
          marginRight={1}
        >
          <NextImage
            src="/images/awards/plumber.webp"
            fill
            alt="ozdebirinsaat plumber image"
            sizes="20vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          position="relative"
          minWidth={304 * 0.56}
          height={304}
          marginRight={1}
        >
          <NextImage
            src="/images/awards/plumbing-pipe.webp"
            fill
            alt="ozdebirinsaat plumbing pipe image"
            sizes="20vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          position="relative"
          minWidth={304 * 0.56}
          height={304}
          marginRight={1}
        >
          <NextImage
            src="/images/awards/plumbing.webp"
            fill
            alt="ozdebirinsaat plumbing image"
            sizes="20vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        gap={2}
        position="relative"
        justifyContent="space-between"
        top="110%"
        sx={{ transform: "translateY(0)", overflowX: "scroll" }}
      >
        <DisplayImage
          imagePath="/images/awards/mobile/pipes.webp"
          height={123}
          sizes="25vw"
          alt="ozdebirinsaat pipes image"
          sx={{ minWidth: 123 * 1.26 }}
        />
        <DisplayImage
          imagePath="/images/awards/mobile/plumber.webp"
          height={123}
          sizes="25vw"
          alt="ozdebirinsaat plumber image"
          sx={{ minWidth: 123 * 1.26 }}
        />
        <DisplayImage
          imagePath="/images/awards/mobile/plumbing-pipe.webp"
          height={123}
          sizes="25vw"
          alt="ozdebirinsaat plumbing pipe image"
          sx={{ minWidth: 123 * 1.26 }}
        />
        <DisplayImage
          imagePath="/images/awards/mobile/plumbing.webp"
          height={123}
          sizes="25vw"
          alt="ozdebirinsaat plumbing image"
          sx={{ minWidth: 123 * 1.26 }}
        />
      </Box>
    </Box>
  );
};

export default AwardsSection;
