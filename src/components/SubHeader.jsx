import { socials } from '../constants'

export default function SubHeader() {
    const home = window.location.pathname === '/' ? true : false

  return (
    <div className={`w-full py-1 px-2 md:px-6 flex items-center justify-between z-[9999] ${home ? 'bg-transparent' : 'bg-white'}`} >
        <div className="flex items-center">
            <ul className="flex text-[20px] gap-2 md:ml-2">
                {socials.map((social) => (
                    <li key={social.name}>
                        <a href={social.link} className="" target={`${social.link !== '/' ? '_blank' : ''}`}>
                            <i className={`uil uil-${social.icon.toLowerCase()}`}></i>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex ml-4">
                <div className="flex items-center gap-3">
                    <a href="tel:+919927150034" className="flex items-center gap-1">
                        <i className="uil uil-phone-alt text-[22px] md:text-[20px] text-gray-900"></i>
                        <h2 className='hidden md:flex'>+91 9927150034</h2>
                    </a>

                    <a aria-label="Chat on WhatsApp" href="https://wa.me/919927150034" className='flex items-center gap-1'>
                        <i className="uil uil-whatsapp text-[22px] md:text-[20px] text-gray-900"></i>
                        <h2 className='hidden md:flex'>WhatsApp</h2>
                    </a>
                </div>
            </div>

            
        </div>

        <div className="flex items-center gap-1 md:mr-4">
            <i className="uil uil-map-marker"></i>
            <h1>Kalkaji, New Delhi</h1>
        </div>

    </div>
  )
}
