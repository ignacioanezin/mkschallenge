export const getColor = (text: string) => {
    const symbol = text.charAt(0);
    return symbol === '▲' ? 'green' : 'red';
};