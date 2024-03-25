export const analizeNumber = (value: number): { originalWasPositive: boolean, absoluteValue: number } => {
    return {
        originalWasPositive: value >= 0,
        absoluteValue: Math.abs(value)
    };
};