import { ArrowRightIcon } from '@sanity/icons'
import Image from 'next/image'
import React from 'react'
import Lcdi from '../../assets/lcdi.png'

export default function NavbarComponent() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={Lcdi} alt="LCDI" className="h-8 w-9" />
            <h1 className="font-[600] text-[19px]">LCDI</h1>
          </div>

          <div className="z-20 flex items-start">
            <div className="flex items-center space-x-2 bg-[#E17153] rounded-full py-3 px-6 cursor-pointer hover:animate-pulse">
              <h1 className="text-[14px] text-white">Join our community</h1>
              <ArrowRightIcon color="#fff" stroke="3px" fontSize={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
