export const hexToDecimal = (hex: any) => parseInt(hex, 16);

export const shortenAddress = (address: string) => {
    if (!address) return null;
    return `${address?.substr(0, 6)}...${address?.substr(
        address.length - 4,
        address.length
    )}`;
};