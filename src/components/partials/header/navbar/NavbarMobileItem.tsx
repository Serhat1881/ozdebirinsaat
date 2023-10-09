import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import type { NavLinkProps } from '@/components/buttons/NavLink';
import Icon from '@/components/miscellaneous/Icon';

const NavbarMobileItem: React.FC<NavLinkProps> = ({ title, href, submenu }) => {
    const hasSubmenu = submenu.length > 0;

    return (
        <Accordion disableGutters>
            <AccordionSummary
                expandIcon={
                    hasSubmenu && (
                        <Icon
                            iconName="chevronDown"
                            color="dropdown"
                            sx={{ fontSize: 12 }}
                        />
                    )
                }
                sx={{ fontSize: '1.25rem', paddingY: 2, '& a': { flex: 1 } }}
            >
                <Link href={href}>{title}</Link>
            </AccordionSummary>

            {hasSubmenu && (
                <AccordionDetails sx={{ bgcolor: 'border.main' }}>
                    <List>
                        {submenu.map((subitem) => (
                            <ListItem
                                key={subitem.id}
                                sx={{ paddingY: 1.5, '& a': { flex: 1 } }}
                            >
                                <Link href={subitem.href}>
                                    <Typography
                                        variant="navlink"
                                        fontSize="1.25rem"
                                    >
                                        {subitem.title}
                                    </Typography>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            )}
        </Accordion>
    );
};

export default NavbarMobileItem;
