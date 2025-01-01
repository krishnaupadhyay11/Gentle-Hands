import {services} from '../constants'
import PrimaryButton from './PrimaryButton'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ServicesTrailer() {
    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <div className="w-full max-w-7xl p-4 flex flex-col items-center">
        <div className='w-full flex flex-col items-center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[48px] font-black text-center source">Physiotherapy Services For</h1>

            <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
                {services.slice(0,6).map((service, index) => (
                    <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index}>
                        <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                            <img src={service.image} alt='Gentle Hands Services' className='w-full h-full object-cover'/>                         
                        </div>

                        <h2 className='text-[20px] font-bold'>{service.title}</h2>

                        <p className='text-[16px] text-gray-700 text-center'>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <PrimaryButton link='/services' title="All Services" />
    </div>
  )
}