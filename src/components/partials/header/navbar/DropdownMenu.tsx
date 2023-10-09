import { Box, Grow, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import type { SubmenuProps } from "@/components/buttons/NavLink";

type DropdownMenuProps = {
  active: boolean;
  submenu: SubmenuProps[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ active, submenu }) => {
  return (
    <Box
      zIndex={active ? 1300 : -1}
      width="100%"
      position="absolute"
      top="calc(100% + 1px)"
      left={0}
    >
      <Grow in={active} timeout={400}>
        <Box>
          {submenu.map(({ id, title, href }) => (
            <Link key={id} href={href} style={{ width: "100%" }}>
              <Box
                height={84}
                left={0}
                width="calc(100% + 1px)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="submenu.main"
                sx={{
                  borderWidth: "0 1px 1px 1px",
                  borderStyle: "solid",
                  borderColor: "white.main",

                  "&:hover": {
                    bgcolor: "submenu.dark",
                  },
                }}
              >
                <Typography variant="dropwdownLink" textAlign="center">
                  {title}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Grow>
    </Box>
  );
};

export default DropdownMenu;
