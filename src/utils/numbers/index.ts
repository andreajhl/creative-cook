const GERMAN_FORMAT = 'de-DE';

export const showWithPoints = (value: number = 0): string => (new Intl.NumberFormat(GERMAN_FORMAT).format(Number(value)));
