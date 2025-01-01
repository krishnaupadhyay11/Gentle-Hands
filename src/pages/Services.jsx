import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { services } from "../constants";

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Services() {
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
          <h1 className="source font-black text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Services</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Advanced Physiotherapy Treatments For Your Wellbeing</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {services.map((service, index) => (
                <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                        <img src={service.image} alt='Services at Gentle Hands Govindpuri' className='w-full h-full object-cover'/>                         
                    </div>

                    <h2 className='text-[20px] font-bold'>{service.title}</h2>

                    <p className='text-[16px] text-gray-700 text-center'>{service.desc}</p>
                </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}