import type { SxProps } from "@mui/material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

import DisplayImage from "../displays/DisplayImage";

type TeamMemberLargeProps = {
  image: string;
  alt: string;
  priority?: boolean;
  name: string;
  title: string;
  width: number | `${number}` | SxProps;
  height: number | `${number}` | SxProps;
  biography: string;
};

type TeamMemberSmallProps = {} & Omit<TeamMemberLargeProps, "biography">;

type TeamMemberProps =
  | TeamMemberPropsDefault
  | TeamMemberPropsSmall
  | TeamMemberPropsLarge;

interface TeamMemberPropsSmall extends TeamMemberSmallProps {
  size?: "small";
}

interface TeamMemberPropsLarge extends TeamMemberLargeProps {
  size?: "large";
}

type TeamMemberPropsDefault = TeamMemberSmallProps & {
  size?: "small" | "large";
};

const TeamMemberLarge: React.FC<TeamMemberLargeProps> = ({
  image,
  alt,
  priority = false,
  name,
  title,
  width,
  height,
  biography,
}) => {
  const { breakpoints } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      direction="row"
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          boxShadow: `27px -27px 0px -20px black`,
          height: "max-content",
        }}
        marginRight={2}
        marginY={2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DisplayImage
          imagePath={image || "/images/logo.png"}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          sizes={`(max-width: ${breakpoints.values.sm}px) 90vw, (max-width: ${breakpoints.values.md}px) 50vw, 25vw`}
          sx={{
            transform: isHovered ? "scale(1.052)" : "scale(1)",
            transition: "transform 0.3s",
          }}
        />
      </Box>
      <Stack justifyContent="center" padding={{ xs: 0, md: 4 }}>
        <Stack marginBottom={2}>
          <Typography variant="title1" fontWeight={900}>
            {name}
          </Typography>
          <Typography variant="title1">{title}</Typography>
        </Stack>
        <Typography variant="body2">{biography}</Typography>
      </Stack>
    </Stack>
  );
};

const TeamMemberSmall: React.FC<TeamMemberPropsSmall> = ({
  width,
  height,
  image,
  alt,
  priority = false,
  name,
  title,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Stack>
      <Box
        sx={{
          boxShadow: `27px -27px 0px -20px black`,
        }}
        marginRight={2}
        marginY={{ xs: 1, sm: 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DisplayImage
          imagePath={image}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          sx={{
            transform: isHovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s",
          }}
        />
      </Box>
      <Stack justifyContent="center" paddingY={3}>
        <Stack marginBottom={2}>
          <Typography variant="title1" fontWeight={900}>
            {name}
          </Typography>
          <Typography variant="title1">{title}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({
  size,
  image,
  alt,
  priority = false,
  name,
  title,
  biography,
  width,
  height,
}: any) => {
  if (size === "large")
    return (
      <TeamMemberLarge
        image={image}
        alt={alt}
        priority={priority}
        name={name}
        title={title}
        width={width}
        height={height}
        biography={biography}
      />
    );
  if (size === "small")
    return (
      <TeamMemberSmall
        image={image}
        alt={alt}
        priority={priority}
        name={name}
        title={title}
        width={width}
        height={height}
      />
    );
  return null;
};

export default TeamMember;
