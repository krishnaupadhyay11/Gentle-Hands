import PrimaryButton from './PrimaryButton'

import home from '../assets/images/GentleHands.png'

export default function PhysioAtHome() {
  return (
    <div className="w-full bg-[#f0f0f0] mt-12 py-4 md:py-8">
        <div className="w-full max-w-7xl p-4 flex flex-col md:flex-row justify-around gap-4">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-[28px] font-bold text-center">Physiotherapy at Home</h1>

                <p className="text-[18px] text-gray-800 text-center md:text-left">Get the best physiotherapy services at the comfort of your home.</p>

                <p className="text-[20px] text-center font-bold">Right Time, Right Services</p>

                <ul className="flex flex-wrap gap-4">
                    <li>Best</li>
                    <li>Best</li>
                    <li>Best</li>
                </ul>

                <PrimaryButton link='/contact-us' title='Book Home Consultation' />
            </div>

            <div className='max-w-[450px] rounded-2xl overflow-hidden'>
                <img src={home} alt="Gentle Hands Physiotherapy at Home" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}
