import background from '../assets/images/backgroundgo_enhanced.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Main() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="w-full h-full absolute min-h-[100vh] top-0 flex items-center" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="flex flex-col items-center justify-center w-full md:max-w-[fit-content] md:ml-[15%] md:mb-[36px] gap-3">
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h1 className="text-[36px] text-center">Hands That</h1>
                <h4 className='text-[44px] text-center source font-bold'>Care For You</h4>
            </div>

            <Link to='/contact-us' className='bg-add hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-3xl text-white max-w-[fit-content] py-3 px-4 mt-4' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <h2>Book Appointment</h2>
            </Link>
        </div>
    </div>
  )
}
