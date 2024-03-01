export const toTitleCase = (s: string) => s[0].toUpperCase() + s.slice(1)

export const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
};