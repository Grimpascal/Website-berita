import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Medsos = () => {
  return (
    <div className='flex flex-col gap-[22px]'>
        <div className='pt-[44px]'>
            <h1 className='text-[#F2F2F2] text-[22px] font-semibold'>Ikuti Kami</h1>
        </div>
        <div className='gap-[24px] flex'>
            <a href="" className='bg-[#E0E0E0] p-[8px] rounded-[12px]'><FontAwesomeIcon icon={faYoutube} className='w-[24px] h-[24px]'/></a>
            <a href="" className='bg-[#E0E0E0] p-[8px] rounded-[12px]'><FontAwesomeIcon icon={faInstagram} className='w-[24px] h-[24px]'/></a>
            <a href="" className='bg-[#E0E0E0] p-[8px] rounded-[12px]'><FontAwesomeIcon icon={faFacebook} className='w-[24px] h-[24px]'/></a>
        </div>
    </div>
  )
}

export default Medsos