interface Cryptocurrency {
    "icon": string;
    "name": string;
    "ticker": string;
    "amount": number;
    "percentChange": number;
    "smallIcons": string[];
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

function getRandomSmallIcons(baseData: Cryptocurrency[], count: number): string[] {
    const smallIcons: string[] = [];
    const totalIcons = Math.min(count, baseData.length)

    for (let i = 0; i < totalIcons; i++) {
        const randomIndex = Math.floor(Math.random() * baseData.length);
        smallIcons.push(baseData[randomIndex].icon)
    }

    return smallIcons;
}

const generateData = (baseData: Cryptocurrency[], count: number) => {
    const maxRecords = 10_000;
    const validCount = Math.min(count, maxRecords);

    const result: Cryptocurrency[] = [];

    for (let i = 0; i < validCount; i++) {
        const randomCryptocurrency = baseData[i % baseData.length];
        const smallIconsCount = Math.floor((Math.random() * 10) + 1)
        const smallIcons = getRandomSmallIcons(baseData, smallIconsCount)
        result.push({
            icon: randomCryptocurrency.icon,
            name: randomCryptocurrency.name,
            ticker: randomCryptocurrency.ticker,
            amount: generateRandomAmount(),
            percentChange: generateRandomPercentage(),
            smallIcons: smallIcons
        })
    }

    return result;
}

export default generateData