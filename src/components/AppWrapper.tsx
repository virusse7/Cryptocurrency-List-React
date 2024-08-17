import { ReactNode } from 'react'

const AppWrapper = ({children} : { children: ReactNode}) => {
  return (
    <div className='h-full mx-auto max-w-xl py-10'>
        {children}
    </div>
  )
}

export default AppWrapper