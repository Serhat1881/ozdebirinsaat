import { Box, Drawer, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import NavLink from "@/components/buttons/NavLink";
import Icon from "@/components/miscellaneous/Icon";

import { navConfig } from "./navbarConfig";
import NavbarMobileItem from "./NavbarMobileItem";

const NavbarMobile: React.FC = () => {
  const logoIndex = navConfig.findIndex((navItem) => navItem?.image);
  const logo = navConfig[logoIndex];

  const [menuOpen, setMenuOpen] = useState(false);
  const [iconName, setIconName] = useState<"hamburger" | "cross">("hamburger");

  useEffect(() => {
    if (!menuOpen) return;

    document.documentElement.scroll({ top: 0 });
  }, [menuOpen]);

  return (
    <>
      <Stack
        direction="row"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          paddingX: 3,
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "border.main",
          "& a": {
            "& .MuiBox-root": {
              borderRight: 0,
              borderBottom: 0,
            },
          },
        }}
      >
        <Box>
          {logo && (
            <NavLink
              title={logo.title}
              href={logo.href}
              image={logo.image}
              submenu={logo.submenu}
            />
          )}
        </Box>

        <Box>
          <IconButton
            color="dropdown"
            aria-label="menu"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setIconName((prev) =>
                prev === "hamburger" ? "cross" : "hamburger"
              );
            }}
            sx={{ marginRight: -1 }}
          >
            <Icon color="dropdown" iconName={iconName} fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      <Drawer
        open={menuOpen}
        transitionDuration={500}
        elevation={0}
        anchor="right"
        onClose={() => setMenuOpen(false)}
        hideBackdrop
        sx={{
          position: "relative",
          height: "calc(100% - 85px)",
          "& > div": { top: 85, height: "calc(100% - 80px)" },
          "& > .MuiPaper-root": {
            width: "100%",
            borderRadius: 0,
          },
        }}
      >
        {navConfig.map(
          (item, index) =>
            logoIndex !== index && <NavbarMobileItem key={item.id} {...item} />
        )}
      </Drawer>
    </>
  );
};

export default NavbarMobile;
