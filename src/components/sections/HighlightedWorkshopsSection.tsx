import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import NewsletterCard from '../cards/NewsletterCard';

type ProgramCard = {
    id: number;
    title: string;
    date: string |any;
    image: string;
    url: string;
};

type HighlightedProgramsSectionProps = {
    title: string;
    programs: ProgramCard[];
};

const HighlightedProgramsSection: React.FC<HighlightedProgramsSectionProps> = ({
    title,
    programs,
}) => {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                {title}
            </Typography>
            <Grid container justifyContent="center" columnSpacing={2}>
                {programs.map((program) => {
                    return (
                        <Grid
                            key={program.id}
                            item
                            xs={12}
                            md={4}
                            display="flex"
                            justifyContent="center"
                        >
                            <NewsletterCard
                                title={program.title}
                                date={program.date}
                                image={program.image}
                                cardHref={program.url}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default HighlightedProgramsSection;
