import { Link } from "react-router-dom";

export default function BookLinkCard() {
  return (
    <div className="w-full p-2 px-6 mt-12" id="testimonials">
        <div className="w-full max-w-7xl bg-add text-white p-4 md:px-8 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-lg text-center md:text-left">We Love to See You Smile</h1>
            <h1 className="text-[24px] text-center md:text-left"><span className="font-bold">Get Rs. 100 OFF</span>* on your first booking</h1>
          </div>

          <div>
            <Link to='contact-us'>
              <button className="bg-white text-add font-bold py-2 px-4 rounded-full md:mr-10 hover:bg-logo1 hover:text-black transition-all duration-200">Book Now</button>
            </Link>

          </div>
        </div>
    </div>
  )
}
