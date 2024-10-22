import React from 'react'
import partner from '../assets/partnerone.png'
import heroimg from '../assets/heroon.png'
import Image from 'next/image'
import AnimatedText from './Reusable/AnimatedText'

export default function HeroComponent() {
  return (
    <div>
      <div className="md:flex items-start justify-between">
        <div className="space-y-4 md:w-[50%]">
          <h1 className="text-[#645D5D] text-[14px]">
            LIKEMINDS COMMUNITY DEVELOPMENT INITIATIVE
          </h1>
          <h1 className="text-[#242A2E] text-[44px] font-[800] leading-[52px]">
            Empowering <br /> Communities, Building <br />
            <AnimatedText text="Resilience" delay={200} />
          </h1>
          <p className="text-[#787070] font-[300] text-[14px]">
            We work to foster sustainable development and well-being for
            vulnerable communities through research, advocacy, and tailored
            solutions
          </p>

          <p className="text-[#111111] text-[14px] pt-20">
            Our trusted partners around the world to help us do what we do.
          </p>
          <Image src={partner} alt="Partner" className="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="z-20 md:mt-0 mt-10"
        >
          <Image src={heroimg} alt="Food Cause" className="md:w-[70%]" />
        </div>
      </div>
    </div>
  )
}
