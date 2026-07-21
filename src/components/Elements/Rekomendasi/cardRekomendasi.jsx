import React from 'react'
import SearchBar from './search'

function CardRekomendasi({berita}) {
  return (
    <div className='flex flex-col gap-3 w-full font-sans'>
        <div className='w-full h-[160px] overflow-hidden rounded-[12px]'>
            <img src={berita.thumbnail} alt="thumbnail berita" className='w-[276px] rounded-[12px]' />
        </div>
        <a href={berita.link} className='block text-[18px] font-semibold text-gray-900 leading-snug hover:text-[#0090FF] transition-colors line-clamp-2 min-h-[54px]'>{berita.title}</a>
        <div className='flex gap-[12px] items-center text-[14px]'>
            <p className='text-[14px] text-[#0090FF] font-semibold'>Internasional</p>
            <p className="text-[14px]">{new Date(berita.pubDate).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
    </div>
  )
}

export default CardRekomendasi