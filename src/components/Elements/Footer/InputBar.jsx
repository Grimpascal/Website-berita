import React from 'react'

const InputBar = () => {
  return (
    <div>
        <h1 className='font-semibold text-[22px] text-[#FFFFFF] mb-8'>Berlangganan Berita Terbaru</h1>
        <input type="email" placeholder='Masukkan Email' className='border border-[#E0E0E0] bg-[#FFFFFF] rounded-[8px] p-[8px] gap-[10px] outline-none'/>
    </div>
  )
}

export default InputBar