import Lcdi from '../assets/lcdi.png'
import Image from 'next/image'
import React, { useRef } from 'react'
import { ArrowRightIcon } from '@sanity/icons'
import HeroComponent from 'components/HeroComponent'
import AboutusComponent from 'components/AboutusComponent'
import ThematicAreas from 'components/ThematicAreas'
import BlogHighlightSection from 'components/BlogHighlightSection'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import type { SharedPageProps } from 'pages/_app'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { readToken } from 'lib/sanity.api'
import Footer from 'components/Footer'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Index(props: PageProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const thematicRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { posts, settings, draftMode } = props

  return (
    <div className="bg-[#FDFBE6]">
      <div className=" py-4 max-w-screen-xl mx-auto md:px-10 px-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={Lcdi} alt="LCDI" className="h-8 w-9" />
            <h1 className="font-[600] text-[19px]">LCDI</h1>
          </div>
          <div className="md:flex hidden items-center space-x-6">
            <h1
              className="text-[14px] cursor-pointer"
              onClick={() => scrollToSection(heroRef)}
            >
              Home
            </h1>
            <h1
              className="text-[14px] cursor-pointer"
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </h1>
            <h1
              className="text-[14px] cursor-pointer"
              onClick={() => scrollToSection(thematicRef)}
            >
              Services
            </h1>
            <h1
              className="text-[14px] cursor-pointer"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact Us
            </h1>
          </div>

          <div className="z-20 flex items-start">
            <div className="flex items-center space-x-2 bg-[#E17153] rounded-full py-3 px-6 cursor-pointer hover:animate-pulse">
              <h1 className="text-[14px] text-white">Join our community</h1>
              <ArrowRightIcon color="#fff" stroke="3px" fontSize={18} />
            </div>
          </div>
          <div className="md:block hidden"></div>
          <div className="absolute h-[1200px] bg-[#00715D] w-[40%] right-0 md:block hidden"></div>
        </div>

        <div className="md:mt-40 mt-20" ref={heroRef}>
          {/*HERO SECTION*/}
          <HeroComponent />
        </div>
        <div className="mt-20" ref={aboutRef}>
          {/*ABOUT US SECTION*/}
          <AboutusComponent />
        </div>
        <div className="md:mt-32 mt-20" ref={thematicRef}>
          {/*THEMATIC AREAS SECTION*/}
          <ThematicAreas />
        </div>
        <div className="mt-32" ref={blogRef}>
          {/*BLOG HIGHLIGHT SECTION*/}
          <BlogHighlightSection posts={posts} />
        </div>

        <div className="md:mt-32 mt-20 bg-[#00715D] py-10 flex items-center justify-center md:px-0 px-4 rounded-2xl">
          <h1 className="text-white md:text-[28px] text-[24px] font-[500]">
            Empowering Communities, Transforming Lives.
          </h1>
        </div>

        <div className="mt-32">
          {/*FOOTER SECTION*/}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
