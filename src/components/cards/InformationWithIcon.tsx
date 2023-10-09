import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import VLinkButton from "../buttons/VLinkButton";
import type { IconProps } from "../miscellaneous/Icon";
import WrappedIcon from "../miscellaneous/WrappedIcon";

type InformationWithIconProps = {
  phoneName?: string;
  text?: string;
  link?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
} & IconProps;

const InformationWithIcon: React.FC<InformationWithIconProps> = ({
  iconName,
  phoneName,
  text,
  link,
  target = "_self",
}) => {
  return (
    <Stack alignItems="center" flexWrap="wrap" flex={1}>
      <WrappedIcon iconName={iconName} />
      <Box
        sx={{
          marginTop: 2,
          textAlign: "center",
          maxWidth: 280,
        }}
      >
        {text && link && (
          <VLinkButton
            href={link}
            target={target}
            variant="text"
            color="black"
            sx={{
              color: "primary.second",
              paddingY: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">{phoneName}</Typography>
            <Typography variant="body2">{text}</Typography>
          </VLinkButton>
        )}
        {text && !link && <Typography variant="body2">{text}</Typography>}
      </Box>
    </Stack>
  );
};

export default InformationWithIcon;
