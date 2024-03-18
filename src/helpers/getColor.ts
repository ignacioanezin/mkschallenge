export const getColor = (text: string): string => {
    const symbol = text.charAt(0);
    return symbol === '▲' ? 'green' : 'red';
};