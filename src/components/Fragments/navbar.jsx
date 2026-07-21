import React, { useState, useEffect } from 'react'
import LogoWebsite from '../Elements/logo'
import { Navigation } from '../Elements/navigation'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed z-50 pl-[72px] pr-[72px] flex items-center border border-b-[#F2F2F2] justify-between transition-all duration-300 ${scrolled ? 'bg-[#0090FF] pt-[16px] pb-[16px] shadow-md border-b-[#F2F2F2] border' : 'bg-transparent pt-[32px] pb-[32px] border-b-transparent'}`}>
      <LogoWebsite warnaTeks={scrolled ? 'text-white' : 'text-black'} warnaLogo={scrolled ? 'brightness-0 invert' : 'brightness-100 invert-0'}/>
      <Navigation warnateks={scrolled ? 'text-white' : 'text-[#0090FF]'} warnateks2={scrolled ? 'text-white' : 'text-[#828282]'}/>
    </nav>
  )
}

export default Navbar