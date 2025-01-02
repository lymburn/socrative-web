export function formatDateString(dateValue: string | number | Date): string {
    console.log(dateValue);
    const date = new Date(dateValue);
    return date.toLocaleDateString();
}