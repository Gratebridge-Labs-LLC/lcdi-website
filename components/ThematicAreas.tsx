import Image from 'next/image'
import React from 'react'
import causeimage from '../assets/causeimage.png'

const thematicAreas = [
    {
      id: 1,
      title: 'Community Empowerment',
      description:
        'Fostering resilience and sustainability through climate-focused solutions and grassroots initiatives.',
      image: causeimage,
      buttonText: 'Read More',
    },
    {
      id: 2,
      title: 'Mental Health and Counseling',
      description:
        'Enhancing access to mental health support and promoting holistic counseling services for emotional well-being.',
      image: causeimage,
      buttonText: 'Read More',
    },
    {
      id: 3,
      title: 'Economic Empowerment',
      description:
        'Strengthening livelihoods by promoting sustainable economic practices and community-led opportunities.',
      image: causeimage,
      buttonText: 'Read More',
    },
    {
      id: 4,
      title: 'Advocacy and Public Awareness',
      description:
        'Amplifying voices through strategic communication and impactful advocacy for sustainable change.',
      image: causeimage,
      buttonText: 'Read More',
    },
    {
      id: 5,
      title: 'Stabilization and Reintegration',
      description:
        'Facilitating social cohesion and providing pathways to stability and reintegration for vulnerable communities.',
      image: causeimage,
      buttonText: 'Read More',
    },
    {
      id: 6,
      title: 'Climate Action',
      description:
        'Driving environmental protection and sustainability through climate action and community involvement.',
      image: causeimage,
      buttonText: 'Read More',
    },
  ]
  

export default function ThematicAreas() {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Our Thematic Areas</h1>
        <p className="max-w-lg text-[#3D3D3D] text-[14px]">
          LCDI focuses on providing sustainable humanitarian and developmental
          services to targeted groups that ensure the resilience and wellbeing
          of vulnerable and underserved individuals and communities across
          several thematic areas:
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {thematicAreas.map((area) => (
          <div key={area.id} className="bg-white border border-black h-[520px] rounded-[40px] flex flex-col p-4">
            <Image src={area.image} alt={area.title} />
            <h1 className="mt-4 text-xl font-semibold text-[#262A2C]">{area.title}</h1>
            <p className="mt-2 flex-grow font-[400] text-[14px] text-[#787070]">{area.description}</p>
            <div className="bg-[#E17153] rounded-full py-3 px-3 mt-auto cursor-pointer">
              <h1 className="text-white text-center font-[600]">{area.buttonText}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
