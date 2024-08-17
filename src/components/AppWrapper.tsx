import { ReactNode } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='overflow-hidden max-h-[544px] max-w-[360px] mx-auto my-20 border-[#283044] border-[1px] rounded-xl shadow-custom'>
      {children}
    </div>
  )
}

export default AppWrapper