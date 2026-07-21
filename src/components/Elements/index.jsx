import React from 'react'

const IndexHeadline = ({ currentIndex, setCurrentIndex, news = [] }) => {
    
  const handleNext = () => {
    if (currentIndex < 4 && currentIndex < news.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <div className="flex items-center gap-[16px] text-[18px] font-sans font-medium mt-4">
      <button 
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`px-3 py-1 rounded-md transition ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-100'}`}
      >
        &lt;
      </button>

      <span className="text-gray-700 text-[14px]">
        {currentIndex + 1} dari {Math.min(5, news.length)}
      </span>

      <button 
        onClick={handleNext}
        disabled={currentIndex === 4 || currentIndex === news.length - 1}
        className={`px-3 py-1 rounded-md transition ${currentIndex === 4 || currentIndex === news.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-100'}`}
      >
        &gt;
      </button>
    </div>
  )
}

export default IndexHeadline