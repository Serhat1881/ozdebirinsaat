import { Box, Grid } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { Filter } from '@/pages/hizmetlerimiz';

import type { NewsletterCardProps } from '../cards/NewsletterCard';
import NewsletterCard from '../cards/NewsletterCard';
import VPagination from '../miscellaneous/VPagination';

type NewletterItemProps = {
    id?: number;
    url?: string;
} & NewsletterCardProps;

type NewsletterProps = {
    data: NewletterItemProps[] | any;
    filter: Filter;
    loading?: boolean;
};

const NewsletterSection: React.FC<NewsletterProps> = ({
    data,
    filter,
    loading = false,
}) => {
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const [pageChangeLoading, setPageChangeLoading] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);

    const filterNewsletters = useCallback(
        (newsletter: NewletterItemProps, _filter: Filter) => {
            const newsDate = new Date(newsletter.date);
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            switch (_filter) {
                case 'all':
                    return true;
                case 'current':
                    return newsDate >= today;
                case 'past':
                    return newsDate < today;
                default:
                    return true;
            }
        },
        []
    );

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredNewsletters = data.filter((news:any) =>
        filterNewsletters(news, filter)
    );
    const displayedNewsletters = filteredNewsletters.slice(
        startIndex,
        endIndex
    );

    const handlePageChange = (newPage: number) => {
        setPage(newPage);

        if (componentRef.current) {
            window.scrollTo({
                top: componentRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        setPage(1);
    }, [filter]);

    return (
        <Box
            ref={componentRef}
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box flex={1}>
                <Grid container columnSpacing={3} rowSpacing={2}>
                    {displayedNewsletters.map((newsletter:any) => {
                        return (
                            <Grid
                                key={newsletter.id}
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                justifyContent="center"
                                display="flex"
                            >
                                <NewsletterCard
                                    title={newsletter.title}
                                    image={newsletter.image}
                                    cardHref={newsletter.url}
                                    priority
                                    loading={loading || pageChangeLoading} date={undefined} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Box
                marginY={10}
                width="100%"
                display="flex"
                justifyContent="center"
            >
                <VPagination
                    count={Math.ceil(filteredNewsletters.length / itemsPerPage)}
                    page={page}
                    setPage={handlePageChange}
                    setLoading={setPageChangeLoading}
                />
            </Box>
        </Box>
    );
};

export default NewsletterSection;
