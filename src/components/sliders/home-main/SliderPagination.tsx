import { Box } from '@mui/material';
import React from 'react';

import styles from './SliderPagination.module.scss';

type SliderPaginationProps = {};

const SliderPagination = React.forwardRef<HTMLElement, SliderPaginationProps>(
    (_, ref) => {
        return <Box ref={ref} className={styles.SliderPaginationWrapper} />;
    }
);

SliderPagination.displayName = 'SliderPagination';

export default SliderPagination;
