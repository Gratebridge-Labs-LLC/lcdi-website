import React from 'react'
import Lcdi from '../assets/lcdi.png'
import Image from 'next/image'
import { ArrowRightIcon } from '@sanity/icons'
import HeroComponent from 'components/HeroComponent'
import AboutusComponent from 'components/AboutusComponent'
import ThematicAreas from 'components/ThematicAreas'
import BlogHighlightSection from 'components/BlogHighlightSection'

export default function index() {
  return (
    <div className="bg-[#FDFBE6]">
      <div className=" py-4 max-w-screen-xl mx-auto px-10 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={Lcdi} alt="LCDI" className="h-8 w-9" />
            <h1 className="font-[600] text-[19px]">LCDI</h1>
          </div>
          <div className="flex items-center space-x-6">
            <h1 className="text-[14px] cursor-pointer">Home</h1>
            <h1 className="text-[14px] cursor-pointer">About Us</h1>
            <h1 className="text-[14px] cursor-pointer">Services</h1>
            <h1 className="text-[14px] cursor-pointer">Contact Us</h1>
          </div>

          <div className="z-20 flex items-start">
            <div className="flex items-center space-x-2 bg-[#E17153] rounded-full py-3 px-6 cursor-pointer hover:animate-pulse">
              <h1 className="text-[14px] text-white">Join our community</h1>
              <ArrowRightIcon color="#fff" stroke="3px" fontSize={18} />
            </div>
          </div>
          <div></div>
          <div className="absolute h-[1200px] bg-[#00715D] w-[40%] right-0"></div>
        </div>

        <div className='mt-40'>
          {/*HERO SECTION*/}
          <HeroComponent />
        </div>
        <div className='mt-20'>
          {/*ABOUT US SECTION*/}
          <AboutusComponent />
        </div>
        <div className='mt-20'>
          {/*THEMATIC AREAS SECTION*/}
          <ThematicAreas />
        </div>
        <div className='mt-20'>
          {/*BLOG HIGHLIGHT SECTION*/}
          <BlogHighlightSection />
        </div>
      </div>
    </div>
  )
}
