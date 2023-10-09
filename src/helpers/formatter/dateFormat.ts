/**
 * Formats date string to locale date string
 *
 * @param dateString Date in string format
 * @param locale Locale. Default: 'tr-TR'
 * @param options Date time format options. Default: { year: 'numeric', month: 'long', day: 'numeric' }
 * @returns Formatted date string
 */
export const localeDateString = (
    dateString: string,
    locale: string = 'tr-TR',
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
) => {
    const date = new Date(dateString);

    return date.toLocaleDateString(locale, options);
};
