import { useCallback, useMemo, useState } from 'react';
import baseData from '../data.json';
import CryptocurrencyTile from './CryptocurrencyTile';
import generateData from './generateData';
import SearchInput from './SearchInput';
import InfiniteScroll from 'react-infinite-scroller';

interface CryptocurrencyListProps {
    recordCount: number;
}

const CryptocurrencyList: React.FC<CryptocurrencyListProps> = ({ recordCount }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [itemsToShow, setItemsToShow] = useState<number>(100);

    const generatedData = useMemo(() => {
        return generateData(baseData, recordCount)
    }, [recordCount])

    const filteredData = useMemo(() => {
        return generatedData.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.ticker.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [searchTerm, generatedData])

    const handleSearch = (searchedText: string) => {
        setSearchTerm(searchedText)
        setItemsToShow(100);
    }

    const loadMore = useCallback(() => {
        setTimeout(() => {
            setItemsToShow((prev) => {
                const newItemsToShow = prev + 100;
                return newItemsToShow;
            });
        }, 1000);
    }, []);

    const hasMoreItems = itemsToShow < filteredData.length;

    return (
        <>
            <SearchInput
                onSearch={handleSearch}
            />
            <div className="overflow-y-auto h-[400px]">
                <InfiniteScroll
                    pageStart={0}
                    loader={<h4 key={0} className='text-center pt-2'>Loading...</h4>}
                    hasMore={hasMoreItems}
                    loadMore={loadMore}
                    useWindow={false}
                >
                    <ul className="pr-2">
                        {filteredData.slice(0, itemsToShow).map((crypto, index) => (
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
                </InfiniteScroll>
            </div>

        </>
    )
}

export default CryptocurrencyList