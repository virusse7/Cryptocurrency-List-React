import React from "react";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='overflow-y-scroll h-full max-w-[360px] mx-auto my-8 border-[#283044] border-[1px] rounded-xl shadow-custom'>
            {children}
        </div>
    )
}

export default AppWrapper