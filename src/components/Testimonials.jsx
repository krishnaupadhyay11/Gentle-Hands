import { tests } from "../constants"

import { useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tests.length-1 : prev-1))
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev === tests.length-1 ? 0 : prev+1))
  }

  return (
    <div className="w-full p-2 py-4 md:py-8 mt-12 bg-[#f0f0f0]">
        <div className="w-full max-w-7xl flex flex-col items-center gap-4">
          <div>
            <h1 className="text-[48px] source font-black">Testimonials</h1>
            <h2 className="text-gray-800">What Our Patients Say About Us</h2>
          </div>

          <div className="w-full max-w-[800px] p-4 flex flex-col justify-center items-center relative">
            <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] flex flex-nowrap overflow-hidden gap-0">
              {tests.map((test, index) => (
                <div className="w-full h-full flex flex-col flex-shrink-0 flex-grow-0 gap-2 items-center transition-all duration-300 ease-in-out" key={index} style={{translate:`${-100*currentIndex}%`}}>
                  <h1 className="text-[22px] font-bold">{test.name}</h1>                        
                  <p className="text-[16px] text-center">{test.remark}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 translate-y-[-50%] left-1 md:left-4 text-5xl text-black z-10 cursor-pointer" onClick={goPrev}>
              <i className="uil uil-angle-left"></i>
            </div>
            <div className="absolute top-1/2 translate-y-[-50%] right-1 md:right-4 text-5xl text-black z-10 cursor-pointer" onClick={goNext}>
              <i className="uil uil-angle-right"></i>
            </div>
          </div>            
        </div>
    </div>
  )
}
