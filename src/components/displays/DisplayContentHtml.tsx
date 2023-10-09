// @ts-nocheck
import { Box } from '@mui/material';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import dynamic from 'next/dynamic';
import type { CSSProperties } from 'react';
import React from 'react';

const Imgix = dynamic(() => import('react-imgix'));

type DisplayContentHtmlProps = {
    content: string | null | undefined; 
    className?: string;
    style?: CSSProperties | undefined;
};

const DisplayContentHtml: React.FC<DisplayContentHtmlProps> = ({
    content,
    className,
    style,
}) => {
    if (!content) {
        return null; 
    }

    return (
        <Box className={`${className}`} style={style}>
            {parse(content, {
                replace: (domNode) => {
                    if (
                        domNode.name === 'img' &&
                        domNode.attribs &&
                        domNode.attribs.src
                    ) {
                        const props = attributesToProps(domNode.attribs);
                        return (
                            <Box key={props.src}> 
                                <Imgix {...props}/>
                            </Box>
                        );
                    }
                    if (domNode.name == 'table') {
                        const props = attributesToProps(domNode.attribs);
                        return (
                            <div style={{ overflowX: 'scroll' }} key={props.key}>
                                <table {...props}>
                                    {domToReact(domNode.children)}
                                </table>
                            </div>
                        );
                    }
                },
            })}
        </Box>
    );
};

export default DisplayContentHtml;
