import type { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: PaletteColor;
    white: PaletteColor;
    tertiary: PaletteColor;
    quaternary: PaletteColor;
    border: PaletteColor;
    imgHoverBg: PaletteColor;
    submenu: PaletteColor;
    dropwdown: PaletteColor;
    transparent: PaletteColor;
    shareIconColor: PaletteColor;
  }
  interface PaletteOptions {
    black?: PaletteColorOptions;
    white?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    quaternary?: PaletteColorOptions;
    border?: PaletteColorOptions;
    imgHoverBg?: PaletteColorOptions;
    submenu?: PaletteColorOptions;
    dropwdown?: PaletteColorOptions;
    transparent?: PaletteColorOptions;
    shareIconColor?: PaletteColorOptions;
  }
}

export const palette = {
  primary: {
    main: "#FFFFFF",
    second: "#000000",
  },
  secondary: {
    main: "#2E4152",
  },
  tertiary: {
    main: "#ADADAD",
  },
  quaternary: {
    main: "#5832A9",
  },
  body: {
    main: "#C6C6C6",
  },
  black: {
    main: "#6499E9",
  },
  white: {
    main: "#FFFFFF",
  },
  border: {
    main: "#E7E7E7",
    second: "#434343",
    dark: "#D0D0D0",
  },
  shareIconColor: {
    main: "#BABABA",
  },
  imgHoverBg: {
    main: "#F3F6F8",
  },
  submenu: {
    main: "#6499E9",
    dark: "#9EDDFF",
  },
  dropdown: {
    light: "#E7E7E7",
    main: "#3D3D3D",
  },
  transparent: {
    main: "#FFFFFF00",
  },
};
