import { Box } from "@mui/material";
import React from "react";

type Coords = {
  lng: number | string;
  lat: number | string;
};

type GoogleMapProps = {
  width?: string | number;
  height?: string | number;
  coords?: Coords;
  overlay?: boolean;
};

const GoogleMap: React.FC<GoogleMapProps> = ({
  width = "100%",
  height = 600,
  overlay = false,
}) => {
  return (
    <Box position="relative">
      <Box
        width="100%"
        height="100%"
        position="absolute"
        zIndex={1}
        sx={{
          background: overlay
            ? "linear-gradient(to bottom, white, transparent 60%)"
            : "none",
          pointerEvents: "none",
        }}
      />
      <iframe
        title="İstanbul Özdebir İnşaat & Çilingir"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.6854509478244!2d29.226674176034!3d40.878776671368996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac30676e0239f%3A0xa2b4ab47552d5db8!2s%C3%96zdebir%20Pendik%20%C3%A7ilingir%20h%C4%B1rdavat%20nalbur!5e0!3m2!1str!2str!4v1696618086970!5m2!1str!2str"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

export default GoogleMap;
