import { images } from "../constants"

import PrimaryButton from "./PrimaryButton"

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function GalleryTrailer() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full max-w-7xl p-4 mt-12 flex flex-col items-center">
      <div className="w-full flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <h1 className="text-[48px] source font-black text-center">Gallery</h1>

        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {images.slice(0,3).map((image, index) => (
                <div className="w-[310px] h-[310px] rounded-2xl overflow-hidden" key={index}>
                    <img src={image.image} alt="Gentle Hands Images" className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
      </div>

      <PrimaryButton link='/gallery' title='View More' />
    </div>
  )
}
