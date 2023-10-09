import { Stack } from "@mui/material";
import React from "react";

import NavLink from "@/components/buttons/NavLink";

import { navConfig } from "./navbarConfig";

const Navbar: React.FC = () => {
  return (
    <Stack
      direction="row"
      height="100%"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        "& > a": {
          "&:last-child": {
            "& .MuiBox-root": {
              borderRight: 0,
            },
          },
        },
      }}
    >
      {navConfig.map(({ title, href, id, submenu, image }) => (
        <NavLink
          title={title}
          href={href}
          key={id}
          submenu={submenu}
          image={image}
        />
      ))}
    </Stack>
  );
};

export default Navbar;
