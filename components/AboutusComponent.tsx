import Image from 'next/image'
import React from 'react'
import aboutusimg from '../assets/aboutusimg.png'

export default function AboutusComponent() {
  return (
    <div>
      <div>
        <h1 className="text-[#3E3838] md:text-[28px] text-[20px] md:w-[70%]">
          Likeminds Community Development Initiative (LCDI) is a non-profit
          organization based in Nigeria, committed to understanding the
          challenges faced by vulnerable and underserved individuals. Our work
          is driven by the mission to empower communities by providing
          sustainable, evidence-based interventions that promote resilience,
          well-being, and self-reliance.
        </h1>

        <div className="md:flex items-start justify-between mt-20">
          <div className="md:w-[50%]">
            <div className="space-y-2">
              <h1 className="text-[#3E3838] font-[600]">Our Mission</h1>
              <h1 className="text-[#787070] font-[400] text-[14px]">
                A world where empowered and resilient communities thrive
                sustainably with access to health, education, clean water, and
                psychosocial support.
              </h1>
            </div>
            <div className="space-y-2 mt-16">
              <h1 className="text-[#3E3838] font-[600]">Our Vision</h1>
              <h1 className="text-[#787070] font-[400] text-[14px]">
                To empower communities through research, advocacy, and
                comprehensive support services. We work to strengthen social
                cohesion, promote climate action, and ensure access to health,
                education, clean water, sanitation, and hygiene.
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="flex md:items-center md:justify-center md:mt-0 mt-10"
          >
            <Image src={aboutusimg} alt="About us" className="md:w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
