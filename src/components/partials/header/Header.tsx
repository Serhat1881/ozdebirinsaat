import type { Theme } from '@mui/material';
import { Box, Container, useMediaQuery } from '@mui/material';
import React from 'react';

import Navbar from './navbar/Navbar';
import NavbarMobile from './navbar/NavbarMobile';

const Header: React.FC = () => {
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <Box component="header" bgcolor="#fff">
            <Container
                maxWidth={false}
                sx={{
                    padding: '0!important',
                }}
            >
                {isMobile ? <NavbarMobile /> : <Navbar />}
            </Container>
        </Box>
    );
};

export default Header;
