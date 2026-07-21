import React from 'react'

const CardPopuler = ({berita}) => {
  return (
    <div className="flex gap-[16px] p-[16px]">
        <div className="w-[175px] h-[128px]">
            <img src={berita.thumbnail} alt="thumbnail" className="rounded-[12px]"/>
        </div>
        <div>
            <h1 className="w-[205px] text-[13px] h-[75px] font-bold">{berita.title}</h1>
            <div className="flex gap-[12px] items-center">
                <p className="text-[14px] text-[#0090FF] font-semibold">Bola</p>
                <p className="text-[#526071]">●</p>
                <p className="text-[14px] text-[#526071]">{new Date(berita.pubDate).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default CardPopuler