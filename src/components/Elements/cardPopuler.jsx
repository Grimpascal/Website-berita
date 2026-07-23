import React from 'react'

const CardPopuler = ({berita}) => {
  return (
    
    <div className="flex gap-[16px] p-[16px] items-center">
        <div className="w-[175px] h-[128px] flex-shrink-0">
            <img src={berita.thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded-[12px]"/>
        </div>
        <div className="flex flex-col gap-y-[12px] justify-between h-full">
            <a className="text-[13px] font-bold hover:text-[#0090FF] transition-colors line-clamp-2" href={berita.link}>
                {berita.title}
            </a>
            <div className="flex gap-[12px] items-center">
                <p className="text-[14px] text-[#0090FF] font-semibold">Bola</p>
                <p className="text-[#526071] text-[10px]">●</p>
                <p className="text-[14px] text-[#526071]">
                    {new Date(berita.pubDate).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
            </div>
        </div>
    </div>
  )
}

export default CardPopuler
