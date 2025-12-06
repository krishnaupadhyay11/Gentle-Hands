import {services} from '../constants'
import PrimaryButton from './PrimaryButton'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ServicesTrailer() {
    useEffect(() => {
        Aos.init()
    }, [])

    const servicePage = window.location.pathname === '/services' ? true : false

  return (
    <div className="w-full max-w-7xl p-4 pt-0 flex flex-col items-center">
        <div className='w-full flex flex-col items-center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[48px] font-black text-center source">Physiotherapy Services For</h1>
            <p className="text-center max-w-3xl mt-2 p-4">Whether you are recovering from surgery, dealing with chronic pain, or looking to improve your overall physical well-being, we provide treatment tailored to your specific needs.</p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
                {services.map((service, index) => (
                    <div className='flex items-center justify-center gap-2 bg-[#f0f0f0] p-3' key={index}>
                        <div className='w-[60px] h-[60px] rounded-2xl overflow-hidden'>
                            <img src={service.image} alt='Gentle Hands Services' className='w-full h-full object-cover'/>                         
                        </div>

                        <div className='flex flex-col items-center'>
                            <h2 className='font-bold'>{service.title}</h2>
                            <p className='text-[14px] italic text-gray-800 text-center'>{service.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        <div className={`${servicePage ? 'hidden' : ''}`}>
            <PrimaryButton link='/services' title="All Services" />
        </div>
        <h1 className="invisible opacity-0">Gentle Hands: The Leading Physiotherapy Center in Kalkaji, Nehru Place, CR Park Delhi</h1>
    </div>
  )
}