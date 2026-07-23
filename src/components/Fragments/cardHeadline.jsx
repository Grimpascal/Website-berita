import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const CardHeadline = ({berita}) => {
  return (
    <div className="flex gap-[154px] pt-[72px]">
        <div>
            <h1 className="font-[600px] font-">Headline</h1>
            <h1 className="font-bold text-[36px] text-left w-[505px] font-[700px] tracking-normal">{berita.title}</h1>
            <p className="text-[16px] w-[505px] h-[99.36px] font-[400px]">{berita.description}</p>
            <p className="pb-[16px]"><FontAwesomeIcon icon={faCalendar} className='pr-[8px]'/>{new Date(berita.pubDate).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <a href={berita.link} className="text-[#0090FF] font-[500px] pt-[16px]">Baca Selengkapnya</a>
        </div>
        <div className="w-[637px] w-[174px] h-[48px]">
            <img className="rounded-[20px]" src={berita.thumbnail} alt="thumbnail" />
        </div>
    </div>
  )
}

export default CardHeadline