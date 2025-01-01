import SubHeader from "../components/SubHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"

import WhatsApp from '../assets/images/WhatsAppButton.png'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ContactUs() {
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
          <h1 className="source font-black text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Contact Us</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">We Welcome Your Queries and Suggestions</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className="w-full max-w-7xl p-10 flex flex-col justify-between gap-4 items-center mt-8 relative">
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12 mb-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] source font-black">Address</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
              657/7, Street No. 7,<br className="hidden md:block"/><span className="md:hidden"> </span>
              Govindpuri, Kalkaji<br className="hidden md:block"/><span className="md:hidden"> </span>
              New Delhi - 110019
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-add sprinkle mb-4" />
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] source font-black">Phone No.</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
                Dr. Naveen <br />
                <a href="tel:+919927150034" className="text-gray-800">
                  +91-9927150034
                </a>
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-add sprinkle mb-4" />
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] source font-black">Hours</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
                Mon - Sun: 10:00 AM - 7:00 PM
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-add sprinkle mb-4" />
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12 ">
            <h1 className="text-[36px] source font-black">Book on WhatsApp</h1>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/919873089523">
                <img alt="Chat on WhatsApp" src={WhatsApp} width={300}/>
            </a>
          </div>
        </div>
        <div className='w-full max-w-7xl p-6 md:p-8 rounded-2xl overflow-hidden'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.108205064627!2d77.25996837549725!3d28.536467175717423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3768bdce36f%3A0xbee525869f056fcb!2sGENTLE%20HANDS%20PHYSIOCARE!5e0!3m2!1sen!2sin!4v1735634950430!5m2!1sen!2sin" 
          width="100%" 
          height="150" 
          allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <Footer />
      </div>

    </div>
  )
}