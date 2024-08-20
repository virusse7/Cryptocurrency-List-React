
interface Cryptocurrency {
    "icon": string;
    "name": string;
    "ticker": string;
    "amount": number;
    "percentChange": number;
}
function generateRandomAmount() {
    const min = 0;
    const max = 1_000_000;
    const randomAmount = Math.random() * (max - min + 0.01) + min;

    return parseFloat(randomAmount.toFixed(2));
}
function generateRandomPercentage() {
    const min = -89.90;
    const max = 57.15;
    const randomPercentage = Math.random() * (max - min) + min;

    return parseFloat(randomPercentage.toFixed(2));
}

const generateData = (baseData: Cryptocurrency[], count: number) => {
    const maxRecords = 10_000;
    const validCount = Math.min(count, maxRecords);

    const result: Cryptocurrency[] = [];
    for (let i = 0; i < validCount; i++) {
        const randomCryptocurrency = baseData[i % baseData.length];
        result.push({
            icon: randomCryptocurrency.icon,
            name: randomCryptocurrency.name,
            ticker: randomCryptocurrency.ticker,
            amount: generateRandomAmount(),
            percentChange: generateRandomPercentage()
        })
    }

    return result;
}

export default generateData