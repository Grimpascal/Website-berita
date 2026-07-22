import React, { useEffect, useState } from 'react'
import LogoWebsite from '../components/Elements/logo'
import Navbar from '../components/Fragments/navbar'
import CardHeadline from '../components/Fragments/cardHeadline'
import { getApiberita } from '../Services/apiBerita'
import IndexHeadline from '../components/Elements'
import CardPopuler from '../components/Elements/cardPopuler'
import SearchBar from '../components/Elements/Rekomendasi/search'
import CardRekomendasi from '../components/Elements/Rekomendasi/cardRekomendasi'
import FooterWeb from '../components/Fragments/footer'


const Home = () => {
  const [news, setNews] = useState([])
  const [news2, setNews2] = useState([])
  const [news3, setNews3] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getApiberita('antara', 'terbaru')
      setNews(data)
    }
    fetchNews()
  },[])

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getApiberita('antara', 'tekno')
      setNews2(data)
    }
    fetchNews()
  },[])

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getApiberita('antara', 'dunia')
      setNews3(data)
    }
    fetchNews()
  },[])

  return(
    <div className='scrollbar-none'>
      <Navbar/>
      <div className="p-[72px] max-w-[1280px] mx-auto flex flex-col mx-auto gap-8">
        {news.length > 0 ? (
          <>
            <CardHeadline berita={news[currentIndex]} />
            <div className="pt-[44px] justify-center flex w-full">
            <IndexHeadline 
              currentIndex={currentIndex} 
              setCurrentIndex={setCurrentIndex} 
              news={news}
            />
            </div>
          </>
        ) : (
          <p className="font-sans text-gray-500 animate-pulse">Memuat berita...</p>
        )}
      </div>
      <div className="p-[72px]">
        <h1 className="font-bold text-[24px] text-left pl-[20px]">Berita Terpopuler</h1>
        <div className="grid grid-cols-3 gap-6 w-full">
          {news2.slice(0,3).map((item, index) => (
            <CardPopuler key={index} berita={item}/>
          ))}
        </div>
      </div>
      <div className='p-[72px]'>
        <SearchBar/>
        <div className='grid grid-cols-4 grid-rows-2 gap-[16px]'>
          {news3.slice(0, 8).map((item, index) => (
            <CardRekomendasi key={index} berita={item}/>
          ))}
        </div>
      </div>
      <div>
        <FooterWeb/>
      </div>
    </div>
  )

}

export default Home
