import React from 'react'
import LogoWebsite from '../Elements/logo'
import Medsos from '../Elements/Footer/medsos';
import Telusuri from '../Elements/Footer/telusuri';
import Bantuan from '../Elements/Footer/bantuan';
import InputBar from '../Elements/Footer/InputBar';

function FooterWeb() {
    const tahun = new Date().getFullYear();
  return (
    <div className='bg-[#2C3C4D] border py-[64px] px-[72px]'>
        <footer className='flex justify-between'>
            <div className='flex-col'>
                <LogoWebsite warnaTeks="text-white"/>
                <p className='text-[#F2F2F2] pt-[22px]'>&copy; {tahun} Berita Kini. All Rights Reserved.</p>
                <Medsos/>
            </div>
            <Telusuri/>
            <Bantuan/>
            <InputBar/>
        </footer>
    </div>
  )
}

export default FooterWeb