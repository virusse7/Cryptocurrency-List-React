import { useState } from 'react'

const SearchInput = () => {
    const [state, setState] = useState('');
  return (
    <section className='py-2'>
        <div className="">
            <input className='w-full' placeholder='Search' >
            
            </input>
            <button>x</button>
        </div>
    </section>
  )
}

export default SearchInput