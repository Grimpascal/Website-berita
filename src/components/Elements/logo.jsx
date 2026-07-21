import React from 'react'
import logoImg from '/logo.png'

const LogoWebsite = ({ warnaTeks = "text-black", warnaLogo }) => (
  <div className="flex items-center gap-[12px]">
    <div className="w-[43.44 px]">
        <img src={logoImg} alt="logo website" className={`${warnaLogo}`}/>
    </div>
    <div className="font-bold">
        <h1 className={`text-[20px] ${warnaTeks}`}><a href="">Berita Kini</a></h1>
    </div>
  </div>
)

export default LogoWebsite