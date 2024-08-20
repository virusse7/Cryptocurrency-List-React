import binanceImage from '../assets/binance.png';
import nearImage from '../assets/near.png'

interface CryptocurrencyTileProps {
    icon: string;
    name: string;
    ticker: string;
    amount: number;
    percentChange: number;
}

const CryptocurrencyTile: React.FC<CryptocurrencyTileProps> = ({ icon, name, ticker, amount, percentChange }) => {

    const colorBoxClass = percentChange >= 0 ? 'text-[#70D1A3] bg-[#5AB88B]/25' : 'text-[#F08282] bg-[#D25858]/25';
    const formattedPercentage = percentChange > 0 ? `+${percentChange.toFixed(2)}` : `${percentChange.toFixed(2)}`;
    const numIcons = Math.floor(Math.random() * 5) + 4;
    const iconsToShow = numIcons > 3 ? 3 : numIcons;
    const extraIconsCount = numIcons - iconsToShow;

    const smallIcons = [nearImage, binanceImage, nearImage, binanceImage, nearImage, binanceImage, nearImage, binanceImage]

    return (
        <li className=''>
            <div className="bg-[#171C2F] px-[12px] py-[8px] rounded-[12px] mb-[4px]">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <div className="relative">
                            <img className="w-[48px] h-[48px] rounded-full" src={icon} alt="" />
                            <div className="absolute bottom-0.5 left-4 -space-x-1.5 flex ">
                                {Array.from({ length: iconsToShow }).map((_, index) => {
                                    const randomIcon = smallIcons[Math.floor(Math.random() * smallIcons.length)];
                                    return (
                                        <img key={index} className='w-[12px] h-[12px]' src={randomIcon} alt='small icon' />
                                    )
                                })}
                                {extraIconsCount > 0 && (
                                    <div className="w-[12px] h-[12px] bg-gray-500 text-[6px] font-bold rounded-full flex items-center justify-center">
                                        {extraIconsCount}+
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-[4px]">
                            <h2 className='font-bold text-[16px]'>{name}</h2>
                            <p className='font-normal text-[10px] py-[2px] px-[5px] bg-[#3E4864] rounded-[4px]'>{ticker}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-[4px]">
                        <div className="font-bold text-[16px]">${amount}</div>
                        <div className={`
                        px-[8px] py-[2px] text-[12px] font-normal rounded-[4px] w-[56px] text-center ${colorBoxClass}
                        `}>
                            {formattedPercentage}%
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CryptocurrencyTile