import type { Theme } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";

import Icon from "@/components/miscellaneous/Icon";
import { socials } from "@/data/socialMedia";

import { navConfig } from "../header/navbar/navbarConfig";

type FooterProps = {
  showSocials?: boolean;
};

const Footer: React.FC<FooterProps> = ({ showSocials = false }) => {
  return (
    <Box component="footer">
      {showSocials && (
        <Stack
          justifyContent="center"
          direction="row"
          spacing={7.5}
          paddingY={2.5}
          sx={{
            borderTop: (theme: Theme) =>
              `1px solid ${theme.palette.border.dark}`,
          }}
        >
          {socials.map((social) => (
            <Link key={social.platform} href={social.href} target="_blank">
              <Stack alignItems="center">
                <Icon iconName={social.platform} />

                <Typography variant="body2" fontSize="0.75rem">
                  @{social.name}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      )}
      <Box bgcolor="black.main">
        <Stack
          alignItems="center"
          borderBottom="1px solid"
          borderColor="border.second"
          paddingY={3}
        >
          <Link href={navConfig[2]?.href ? navConfig[2]?.href : "/"}>
            <NextImage
              src="/images/logo-white.png"
              width={100}
              height={100}
              alt="Özdebir İnşaat & Çilingir Logo"
            />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
