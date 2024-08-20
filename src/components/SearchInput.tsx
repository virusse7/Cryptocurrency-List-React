import { useState } from "react";

interface SearchInputProps {
    onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);
    }

    return (
        <section className='py-2'>
            <div className="relative">
                <input
                    className='
                    w-full px-[8px] py-[9px] rounded-[6px] border-[#2B344D] border-[1px]
                    bg-[#040407] text-[#7685A0]'
                    placeholder='Search'
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <div className="">
                    <button className='absolute right-[10px] top-[12px]'>
                        <svg
                            className="w-[20px] h-[20px] text-gray-800 dark:text-[#7685A0]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SearchInput