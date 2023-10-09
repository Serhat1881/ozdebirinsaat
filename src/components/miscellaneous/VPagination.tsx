import {
    Box,
    Pagination as MuiPagination,
    PaginationItem,
    styled,
} from '@mui/material';
import React from 'react';

import Icon from './Icon';

const CustomPagination = styled(MuiPagination)(({ theme }) => ({
    '& .MuiPagination-ul': {
        justifyContent: 'center',
        borderLeft: '1px solid',
        borderColor: theme.palette.tertiary.main,
        '& .MuiPaginationItem-root': {
            width: 50,
            height: 50,
            borderRadius: 0,
            color: '#000',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderRight: '1px solid',
            borderColor: theme.palette.tertiary.main,
            margin: 0,
            '&.Mui-disabled': {
                borderTop: '1px solid',
                borderBottom: '1px solid',
            },
            [theme.breakpoints.down('sm')]: {
                width: 32,
                height: 34,
            },
        },
        '& .Mui-selected': {
            backgroundColor: 'black',
            color: theme.palette.white.main,
        },
    },
    '& .MuiPaginationItem-root': {
        color: '#ff0000',
    },
}));

const RightArrowIcon = () => {
    return <Icon iconName="rightArrow" color="tertiary" />;
};

const LeftArrowIcon = () => {
    return (
        <Icon
            iconName="rightArrow"
            color="tertiary"
            sx={{ transform: 'rotate(180deg)' }}
        />
    );
};

type VPaginationProps = {
    count: number;
    page: number;
    setPage(value: number): void;
    setLoading?(value: boolean): void;
};

const VPagination: React.FC<VPaginationProps> = ({
    count = 10,
    page = 0,
    setPage,
    setLoading,
}) => {
    const handleChange = (value: number) => {
        setPage(value);

        if (setLoading) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    return (
        <Box>
            <CustomPagination
                count={count}
                page={page}
                onChange={(_, pageNumber) => handleChange(pageNumber)}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{
                            previous: LeftArrowIcon,
                            next: RightArrowIcon,
                        }}
                        {...item}
                    />
                )}
            />
        </Box>
    );
};

export default VPagination;
