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
}

const CryptocurrencyList = () => {
    const [generatedData, setGeneratedData] = useState<Cryptocurrency[]>([]);
    const [filteredData, setFilteredData] = useState<Cryptocurrency[]>([]);

    useEffect(() => {
        const data = generateData(baseData, 100); // Change number to genereate objects from range 0-10_000
        setGeneratedData(data);
        setFilteredData(data);
    }, [])

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
                    />
                ))}
            </ul>
        </>
    )
}

export default CryptocurrencyList