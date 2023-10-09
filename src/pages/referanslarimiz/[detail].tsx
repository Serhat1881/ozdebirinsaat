import { Box, Container } from '@mui/material';
import type { GetServerSideProps } from 'next';
import React from 'react';

import MainLayout from '@/components/layouts/main/MainLayout';
import WorkshopSection from '@/components/sections/WorkshopSection';
import type { Program } from '@/data/referans';
import { workshops } from '@/data/referans';

type WorkshopDetailProps = Program & {
    highlightedWorkshops: Program[] | any;
};

const WorkshopDetail: React.FC<WorkshopDetailProps> = ({
    title,
    description,
    image,
}) => {
    return (
        <MainLayout
            title={title}
            description={description}
            image={image}
            containerWidth="lg"
            paddingY={{ xs: 8, md: 12 }}
        >
            <Container maxWidth={false}>
                <Box paddingBottom={8}>
                    <WorkshopSection
                        createdAt={''} 
                        title={title}
                        description={description}
                        coverImage={''}
                        coverImageAlt={''}
                        content={''}
                        />
                </Box>
            </Container>
        </MainLayout>
    );
};

export default WorkshopDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
        query: { detail: slug },
    } = context;

    const workshop = workshops.find(
        (_workshop) => _workshop.url.split('/').at(-1) === slug
    );

    const highlightedWorkshops = workshops
        .slice(0, 4)
        .filter((_workshop) => _workshop.url.split('/').at(-1) !== slug)
        .slice(0, 3);

    return {
        props: {
            ...workshop,
            highlightedWorkshops,
        },
    };
};
