const Header = () => {
  return (
    <section className='p-3 border-[#2B344D] border-b-[1px]'>
      <div className="flex flex-row items-center justify-between  gap-2 text-white">
        <div className="flex justify-center items-center">
          <div className="bg-[#2B344D] rounded-full p-[6px] ">
            <svg className=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </div>
        </div>
        <div className="text-[16px] leading-[22px] font-bold">Select a token</div>
        <div className="w-[32px] h-[32px]"></div>
      </div>
    </section>
  )
}

export default Header