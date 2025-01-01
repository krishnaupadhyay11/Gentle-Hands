import { images } from "../constants"

import SubHeader from "../components/SubHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Gallery() {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <hr className='block w-full p-2 bg-add' />

      <div className="w-full flex flex-col items-center relative">
        <div className="absolute w-full bg-logo1 flex flex-col items-center p-2">
          <h1 className="source font-black text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Gallery</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Glimpses of Gentle Hands</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {images.map((image, index) => (
                <div className="w-[310px] h-[310px] rounded-2xl overflow-hidden" key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <img src={image.image} alt="PG-11 Images" className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}