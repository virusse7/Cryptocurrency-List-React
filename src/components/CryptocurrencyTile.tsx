// { tokenFullName, tokenShortName, icons, price, logo, percentage }
import nearImage from '../assets/near.png';
import binanceImage from '../assets/binance.png';


const CryptocurrencyTile = ({ percentage }: { percentage: number }) => {
    const colorBoxClass = percentage > 0 ? 'text-[#70D1A3] bg-[#5AB88B]/25' : 'text-[#F08282] bg-[#D25858]/25';
    const formattedPercentage = percentage > 0 ? `+${percentage}` : `${percentage}`;

    return (
        <div className=''>
            <div className="bg-[#171C2F] px-2 py-1 rounded-[12px] mb-[4px]">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-2">
                        <div className="relative">
                            <img className="w-[48px] h-[48px]" src={nearImage} alt="Near Logo" />
                            <div className="absolute bottom-0.5 -right-4 flex ">
                                <img className="w-[12px] h-[12px] -mr-[50%]" src={binanceImage} alt="Near Logo" />
                                <img className="w-[12px] h-[12px] -mr-[50%]" src={binanceImage} alt="Near Logo" />
                                <img className="w-[12px] h-[12px] -mr-[50%]" src={binanceImage} alt="Near Logo" />

                            </div>
                        </div>
                        <div className="">
                            <h2>DogeCoin</h2>
                            <p>Doge</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-end">
                        <div className="font-bold text-[16px]">$1.00</div>
                        <div className={`p-[1px] rounded-[4px] ${colorBoxClass}`}>
                            {formattedPercentage}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptocurrencyTile