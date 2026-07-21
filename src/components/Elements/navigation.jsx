import React from 'react'

export const Navigation = ({ warnateks, warnateks2 }) => {
    return (
        <div>
            <ul className="flex gap-[10px] text-[16px] font-semibold">
                <li><a href="" className={`${warnateks}`}>Beranda</a></li>
                <li><a href="" className={`${warnateks2}`}>Terbaru</a></li>
                <li><a href="" className={`${warnateks2}`}>Hiburan</a></li>
                <li><a href="" className={`${warnateks2}`}>Gaya Hidup</a></li>
                <li><a href="" className={`${warnateks2}`}>Olahraga</a></li>
                <li><a href="" className={`${warnateks2}`}>Nasional</a></li>
                <li><a href="" className={`${warnateks2}`}>Internasional</a></li>
            </ul>
        </div>
    )
}
