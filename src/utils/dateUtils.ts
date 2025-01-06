/**
 * Formats a date value into a localized date string.
 *
 * @param {string | number | Date} dateValue - The date value to format. It can be a string, number, or Date object.
 * @returns {string} The formatted date string in the locale-specific format.
 *
 * @example
 * formatDateString("2023-10-05T14:48:00.000Z"); // Returns "10/5/2023" in en-US locale
 */
export function formatDateString(dateValue: string | number | Date): string {
    console.log(dateValue);
    const date = new Date(dateValue);
    return date.toLocaleDateString();
}