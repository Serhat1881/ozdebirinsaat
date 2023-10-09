import { Box, Container } from '@mui/material';
import type { GetServerSideProps } from 'next';
import React from 'react';

import MainLayout from '@/components/layouts/main/MainLayout';
import GallerySection from '@/components/sections/GallerySection';
import HighlightedProgramsSection from '@/components/sections/HighlightedWorkshopsSection';
import WorkshopSection from '@/components/sections/WorkshopSection';
import type { Program } from '@/data/hizmetler';
import { workshops } from '@/data/hizmetler';

type WorkshopDetailProps = Program & {
    highlightedWorkshops: Program[] | any;
};

const WorkshopDetail: React.FC<WorkshopDetailProps> = ({
    title,
    description,
    image,
    details,
    imageGallery,
    photographer,
    highlightedWorkshops,
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
                        createdAt={''} title={title}
                        description={description}
                        {...details}                    />


                    {imageGallery.length !== 0 && (
                        <GallerySection
                            imageGallery={imageGallery}
                            photographer={photographer}
                        />
                    )}
                </Box>

                <HighlightedProgramsSection
                    title="Diğer Hizmetlerimiz"
                    programs={highlightedWorkshops}
                />
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
