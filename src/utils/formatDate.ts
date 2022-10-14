export const formattedDate = (date: Date, separator: string) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
};

export const formattedTime = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `Le ${day}/${month}/${year}, à ${hours}h${minutes}`;
};