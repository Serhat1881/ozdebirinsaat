import type { LinkProps } from 'next/link';
import Link from 'next/link';
import React from 'react';

import type { VButtonProps } from './VButton';
import VButton from './VButton';

export interface VLinkButtonProps extends VButtonProps {
    href: string;
    passHref?: LinkProps['passHref'];
    legacyBehavior?: LinkProps['legacyBehavior'];
    target?: React.HTMLAttributeAnchorTarget | undefined;
    children: React.ReactNode;
}

const VLinkButton: React.FC<VLinkButtonProps> = ({
    href,
    passHref,
    legacyBehavior,
    target = '_self',
    children,
    ...buttonProps
}) => {
    return (
        <Link
            href={href}
            passHref={passHref}
            legacyBehavior={legacyBehavior}
            target={target}
        >
            <VButton {...buttonProps}>{children}</VButton>
        </Link>
    );
};

export default VLinkButton;
