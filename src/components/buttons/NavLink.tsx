import { Box, Typography } from "@mui/material";
import NextImage from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Icon from "../miscellaneous/Icon";
import DropdownMenu from "../partials/header/navbar/DropdownMenu";

export type SubmenuProps = {
  id: number;
  title: string;
  href: string;
};

export type NavLinkProps = {
  title: string;
  href: string;
  submenu: SubmenuProps[];
  image?: string;
};

export type NavLinkItemProps = {
  title: string;
  image?: string;
  submenu: SubmenuProps[];
};
const NavLinkItem: React.FC<NavLinkItemProps> = ({ submenu, image, title }) => {
  const upperCaseTitle = title.toLocaleUpperCase("tr");

  const [activeSubmenu, setActiveSubmenu] = useState(false);

  /**
   * This state is used to prevent the dropdown menu from appearing
   * when the page is first loaded. Because the dropdown menu is
   * rendered on the server side, it is visible when the page is
   * first loaded. This state is used to prevent this.
   */
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <Box>
      <Box
        height={84}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRight="1px solid"
        borderBottom="1px solid"
        borderColor="border.main"
        position="relative"
        component="div"
        sx={{
          "&:hover": {
            bgcolor: image ? "imgHoverBg.main" : "black.main",
            borderColor: image ? "border.main" : "black.main",
            color: "white.main",

            "& > svg": {
              color: "dropdown.main",
            },
          },
        }}
        onMouseEnter={() => setActiveSubmenu(true)}
        onMouseLeave={() => setActiveSubmenu(false)}
      >
        {image ? (
          <NextImage src={image} width={130} height={70} alt={title} />
        ) : (
          <>
            <Typography
              variant="navlink"
              textAlign="center"
              color="transparent"
            >
              {upperCaseTitle}
            </Typography>

            {isMounted && submenu.length > 0 && (
              <>
                <Icon
                  iconName="chevronDown"
                  sx={{
                    fontSize: "0.75rem",
                    position: "absolute",
                    color: "dropdown.light",
                    bottom: 12,
                  }}
                />

                <DropdownMenu active={activeSubmenu} submenu={submenu} />
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, title, submenu, image }) => {
  if (submenu.length > 0) {
    return (
      <Box sx={{ width: "100%", cursor: "pointer" }}>
        <NavLinkItem title={title} image={image} submenu={submenu} />
      </Box>
    );
  }

  return (
    <Link href={href} style={{ width: "100%" }}>
      <NavLinkItem title={title} image={image} submenu={submenu} />
    </Link>
  );
};

export default NavLink;
