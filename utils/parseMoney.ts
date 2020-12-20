export default function convertPriceValue(value: number): string {
    const valueInReal = value / 100;
    return valueInReal.toFixed(2).replace(".", ",");
}