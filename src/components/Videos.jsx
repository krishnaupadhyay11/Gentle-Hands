import { videos } from "../constants"

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Videos() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full max-w-7xl p-4 mt-12 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[48px] source font-black text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Videos</h1>

        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {videos.slice(0,3).map((video, index) => (
                <div className="max-w-[350px] rounded-2xl overflow-hidden" key={index}>
                  <iframe
                    src={video.video}
                    width={320}
                    height={427}
                    loading="lazy"
                  >
                  </iframe>
                    {/* <video muted controls load>
                      <source src={video.video} type="video/mp4" />
                    </video> */}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
