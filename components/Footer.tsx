import React from 'react'

export default function Footer() {
  return (
    <div className="pb-12">
      <div className="items-center flex flex-col justify-center space-y-10">
        <h1 className="text-[20px] text-[#3A3A3A] font-[600]">LCDI</h1>
        <div className="flex items-center space-x-10">
          <h1 className="text-[#3D3D3D] text-[14px] cursor-pointer">Home</h1>
          <h1 className="text-[#3D3D3D] text-[14px] cursor-pointer">
            About us
          </h1>
          <h1 className="text-[#3D3D3D] text-[14px] cursor-pointer">
            Services
          </h1>
          <h1 className="text-[#3D3D3D] text-[14px] cursor-pointer">
            Contact Us
          </h1>
        </div>
        <h1 className="text-[#3D3D3D] text-[14px] font-[300]">
          © 2024 LCDI . All rights reserved.
        </h1>
      </div>
    </div>
  )
}
