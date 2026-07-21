import React from 'react'

function SearchBar() {
  return (
    <div className='flex justify-between items-center py-[44px]'>
        <h1 className='font-bold text-[24px] w-[310px]'>Rekomendasi Untuk Anda</h1>
        <input type="text" placeholder='Cari Disini...' className='border border-[#E0E0E0] rounded-[8px] py-[12px] px-[30px] outline-none'/>
    </div>
  )
}

export default SearchBar