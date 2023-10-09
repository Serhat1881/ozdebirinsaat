export const paginationMainSlider = (
    current: number,
    total: number
): string => {
    return `<span class="swiper-pagination-current">${current}</span>
    <span class="divider"></span>
    <span class="swiper-pagination-total">${total}</span>`;
};
