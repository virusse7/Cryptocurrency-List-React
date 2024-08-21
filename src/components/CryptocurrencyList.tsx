import { useMemo, useState } from 'react';
import baseData from '../data.json';
import CryptocurrencyTile from './CryptocurrencyTile';
import generateData from './generateData';
import SearchInput from './SearchInput';

interface CryptocurrencyListProps {
    recordCount: number;
}

const CryptocurrencyList: React.FC<CryptocurrencyListProps> = ({recordCount}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const generatedData = useMemo(() => {
        return generateData(baseData, recordCount)
    }, [recordCount])

    const filteredData = useMemo(() => {
        return generatedData.filter((crypto) => 
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.ticker.toLowerCase().includes(searchTerm.toLowerCase())
        ) 
    }, [searchTerm,generatedData])

    const handleSearch = (searchedText: string) => {
        setSearchTerm(searchedText)
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