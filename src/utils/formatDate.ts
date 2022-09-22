export const formattedDate = (date: Date, separator: string) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
};