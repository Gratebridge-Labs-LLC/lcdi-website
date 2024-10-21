import React from 'react'
import partner from '../assets/partnerone.png'
import heroimg from '../assets/heroon.png'
import Image from 'next/image'

export default function HeroComponent() {
  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="space-y-4 w-[50%]">
          <h1 className="text-[#645D5D] text-[14px]">
            LIKEMINDS COMMUNITY DEVELOPMENT INITIATIVE
          </h1>
          <h1 className="text-[#242A2E] text-[44px] font-[800] leading-[52px]">
            Empowering <br /> Communities, Building <br /> Resilience
          </h1>
          <p className="text-[#787070] font-[300] text-[14px]">
            We work to foster sustainable development and well-being for
            vulnerable communities through research, advocacy, and tailored
            solutions
          </p>

          <p className="text-[#111111] text-[14px] pt-20">
            Our trusted partners around the world to help us do what we do.
          </p>
          <Image src={partner} alt="Partner" className='' />
        </div>

        <div className='z-20'>
          <Image src={heroimg} alt="Food Cause" className='w-[70%]' />
        </div>
      </div>
    </div>
  )
}
