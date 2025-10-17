export const formatCurrency = (amount: number, currency: string, locale: string = 'en-US') => {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).format(amount);
    } catch (e) {
        // Fallback for invalid currency codes
        console.warn(`Invalid currency code: ${currency}`);
        return `${currency} ${amount.toFixed(2)}`;
    }
};
