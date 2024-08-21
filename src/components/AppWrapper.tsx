import { ReactNode } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='overflow-y-scroll max-h-[544px] max-w-[360px] mx-auto mt-10 border-[#283044] border-[1px] rounded-xl shadow-custom'>
      {children}
    </div>
  )
}

export default AppWrapper