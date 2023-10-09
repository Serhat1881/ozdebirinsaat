import { Grid, Typography } from '@mui/material';
import React from 'react';

import { programs } from '@/data/hizmetler';
import { sliderData } from '@/example/data';

import StandartSlider from '../sliders/standart/StandartSlider';

const SliderSection: React.FC = () => {
    return (
        <Grid
            container
            columnSpacing={{ xs: 0, md: 10 }}
            paddingTop={{ xs: 10, md: 0 }}
        >
            <Grid
                item
                xs={12}
                md={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Typography variant="h5" component="h2" fontWeight={900}>
                    {sliderData.title}
                </Typography>

                <Typography variant="body2">
                    {sliderData.description}
                </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
                <StandartSlider slides={programs} href={sliderData.href} />
            </Grid>
        </Grid>
    );
};

export default SliderSection;
