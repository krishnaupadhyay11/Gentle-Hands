import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServicesTrailer from '../components/ServicesTrailer'

import clinicImage from '../assets/images/logot.png'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <hr className='block w-full p-2 bg-add z-10 border-0' />

      <div className="w-full flex flex-col items-center relative">
        <div className="absolute w-full bg-logo1 flex flex-col items-center p-2">
          <h1 className="source font-black text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">About Us</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Little description about us</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className='w-[300px] h-[300px]'>
            <img src={clinicImage} alt='PG-11 Image' className='w-full h-full object-cover' />
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-center max-w-[600px] p-4 flex flex-col items-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natus maiores vel dolorem quam quod optio pariatur quibusdam commodi? Voluptatibus eveniet inventore exercitationem ipsam sint? Magni porro dicta mollitia accusantium corporis quas quibusdam.
            </p>
            <div className='flex flex-col items-center'>
              <h2 className='text-[18px] font-bold'>Dr. Naveen</h2>
              <div className='flex items-center gap-1'>
                <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                <p>+91 9927150034</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10'>
            <ServicesTrailer />
        </div>
        <Footer />
      </div>
    </div>
  )
}