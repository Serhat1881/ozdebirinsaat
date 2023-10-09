import { ButtonGroup, styled } from '@mui/material';
import type { MouseEvent } from 'react';
import React from 'react';

import VButton from './VButton';

const FilterButton = styled(VButton)(({ theme }) => ({
    padding: theme.spacing(1.5, 2),
    lineHeight: 1,

    '&.MuiButton-selected': {
        backgroundColor: theme.palette.black.main,
        color: theme.palette.common.white,
    },
}));

type VFilterButtonGroupProps<T extends string> = {
    selectedFilter: T;
    setFilter: (value: T) => void;
    filters: {
        value: T;
        label: string;
    }[];
    setLoading?: (value: boolean) => void;
};

const VFilterButtonGroup = <T extends string>({
    selectedFilter,
    setFilter,
    filters,
    setLoading,
}: VFilterButtonGroupProps<T>) => {
    const handleFilterChange = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value as T;

        if (value === selectedFilter) return;

        setFilter(value);

        if (setLoading) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    return (
        <ButtonGroup variant="outlined" size="small" color="black">
            {filters.map(({ value, label }) => (
                <FilterButton
                    key={value}
                    value={value}
                    onClick={handleFilterChange}
                    className={
                        selectedFilter === value ? 'MuiButton-selected' : ''
                    }
                >
                    {label}
                </FilterButton>
            ))}
        </ButtonGroup>
    );
};

export default VFilterButtonGroup;
