import { useEffect, useState } from 'react';
import baseData from '../data.json';
import CryptocurrencyTile from './CryptocurrencyTile';
import generateData from './generateData';
import SearchInput from './SearchInput';

interface Cryptocurrency {
    "icon": string;
    "name": string;
    "ticker": string;
    "amount": number;
    "percentChange": number;
    smallIcons: string[];
}

interface CryptocurrencyListProps {
    recordCount: number;
}

const CryptocurrencyList: React.FC<CryptocurrencyListProps> = ({recordCount}) => {
    const [generatedData, setGeneratedData] = useState<Cryptocurrency[]>([]);
    const [filteredData, setFilteredData] = useState<Cryptocurrency[]>([]);

    useEffect(() => {
        const data = generateData(baseData, recordCount);
        setGeneratedData(data);
        setFilteredData(data);
    }, [recordCount])

    const handleSearch = (searchTerm: string) => {
        const filtered = generatedData.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.ticker.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredData(filtered);
    }

    return (
        <>
            <SearchInput
                onSearch={handleSearch}
            />
            <ul className="">
                {filteredData.map((crypto, index) => (
                    <CryptocurrencyTile
                        key={index}
                        amount={crypto.amount}
                        icon={crypto.icon}
                        name={crypto.name}
                        percentChange={crypto.percentChange}
                        ticker={crypto.ticker}
                        smallIcons={crypto.smallIcons}
                    />
                ))}
            </ul>
        </>
    )
}

export default CryptocurrencyList