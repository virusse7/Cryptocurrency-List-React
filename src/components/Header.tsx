
const Header = () => {
  return (
    <section className='p-3 border-[#283044] border-b-2 border-solid'>
      <div className="flex flex-row items-center justify-between gap-2 text-white">
        <div className="">
            <button>
            <div className="bg-[#1d2133] rounded-full p-1">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                </svg>
            </div>
            </button>
        </div>
        <div className="text-lg font-semibold">Select a token</div>
        <div className=""> </div>
      </div>
    </section>
  )
}

export default Header