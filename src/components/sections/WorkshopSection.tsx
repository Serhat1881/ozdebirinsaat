import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import DisplayContentHtml from "../displays/DisplayContentHtml";
import DisplayImage from "../displays/DisplayImage";
import Share from "../miscellaneous/Share";

type WorkshopSectionProps = {
  title: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  content: string;
  createdAt: string;
};

const WorkshopSection: React.FC<WorkshopSectionProps> = ({
  title,
  description,
  coverImage,
  coverImageAlt,
  content,
}) => {
  const router = useRouter();

  return (
    <Box>
      <Box marginTop={2}>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Box>

      <Box marginY={2}>
        <Typography variant="body2">{description}</Typography>
      </Box>

      <DisplayImage
        imagePath={coverImage}
        alt={coverImageAlt}
        priority
        width={1}
        height={417}
      />

      <Share url={router.asPath} title="İstanbul Özdebir İnşaat & Çilingir" />

      <DisplayContentHtml content={content} />
    </Box>
  );
};

export default WorkshopSection;
