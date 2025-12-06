import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import logo from '../assets/images/GentleHands.svg'
import { socials } from '../constants'
import { navLinks } from '../constants'

export default function Footer() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);

  return (
    <footer className="w-full h-full bg-logo1 mt-12 flex flex-col">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 p-8 pb-12 justify-around">
            <div className="flex flex-col gap-2 items-center">
                <div className="w-[300px]">
                    <img src={logo} alt="Gentle Hands Logo" className="w-full h-full object-contain" />
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-[24px] font-semibold mb-2'>Contact Us</h1>

                    <h2 className='text-center text-[18px]'>Dr. Naveen </h2>

                    <a href="tel:+919927150034" className="flex items-center gap-1">
                        <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                        <h2>+91 9927150034</h2>
                    </a>

                    <a aria-label="Chat on WhatsApp" href="https://wa.me/919927150034" className='flex items-center gap-1'>
                        <i className="uil uil-whatsapp text-[18px] text-gray-900"></i>
                        <h2>WhatsApp</h2>
                    </a>

                    <ul className="flex text-[20px] gap-2 md:ml-2 text-gray-950">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a href={social.link} className="" target="_blank">
                                    <i className={`uil uil-${social.icon.toLowerCase()}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-[24px] font-semibold mb-2'>Address</h1>

                <p className="text-center">
                    Reflect Gym, E-12, <br />
                    Kalkaji, New Delhi, <br />
                    Delhi - 110019
                </p>

                <div className='max-w-[300px] rounded-2xl overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.108205064627!2d77.25996837549725!3d28.536467175717423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3768bdce36f%3A0xbee525869f056fcb!2sGENTLE%20HANDS%20PHYSIOCARE!5e0!3m2!1sen!2sin!4v1735634950430!5m2!1sen!2sin" 
                    width="100%" 
                    height="150" 
                    allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-[24px] font-semibold mb-2'>Useful Links</h1>

                <ul className='flex flex-col gap-2 items-center'>
                    {navLinks.map((navLink) => (
                        <li key={navLink.title}>
                            <Link to={navLink.link}>{navLink.title}</Link>
                        </li>
                    ))}
                    <li><Link to='/contact-us'><h1 className='text-sm mt-2'>Physiotherapy in Kalkaji, CR Park</h1></Link></li>
                    <li><Link to='/contact-us'><h1 className='text-sm'>Physiotherapy in Nehru Place, GK</h1></Link></li>
                    <li><Link to='/contact-us'><h1 className='text-sm'>Physiotherapy in Govindpuri, Okhla</h1></Link></li>
                </ul>
            </div>
        </div>

        <div className='w-full px-4 py-2 bg-add text-white flex justify-center items-center'>
            <h1 className='text-center'>&#169; 2025 Gentle Hands. Designed and Developed by <Link to='https://krishnaupadhyay.vercel.app' className='text-logo1' target='_blank'>
                    Krishna.
                </Link>
            </h1>
        </div>
    </footer>
  )
}
