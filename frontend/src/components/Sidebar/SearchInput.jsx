import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form action="" className='flex items-center gap-2 mt-2 mx-2'>
        <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className="w-6 h-6 outline-none" /></button>
    </form>
  )
}

export default SearchInput

// code template

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// function SearchInput() {
//   return (
//     <form action="" className='flex items-center gap-2 mt-2 mx-2'>
//         <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className="w-6 h-6 outline-none" /></button>
//     </form>
//   )
// }

// export default SearchInput