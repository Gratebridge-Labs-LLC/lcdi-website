import { Post } from 'lib/sanity.queries'
import React from 'react'
import CoverImage from './CoverImage'
import Avatar from 'components/AuthorAvatar'
import Link from 'next/link'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
}

export default function BlogHighlightSection(props: IndexPageProps) {
  const { preview, loading, posts } = props
  const [heroPost, ...morePosts] = posts || []

  console.log(posts, 'lok')

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Discover Our Latest Articles</h1>
        <p className="max-w-lg text-[#3D3D3D] text-[14px]">
          Explore a diverse collection of articles showcasing our efforts and
          the impact small communities can make across the globe.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {posts.map((post) => (
            <div
              key={post?._id}
              className=" h-[420px] rounded-[10px] p-4"
            >
              <div className="">
                <div className="w-[80%]">
                  <CoverImage
                    slug={post.slug}
                    title={post.title}
                    image={post.coverImage}
                    priority={false}
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="mt-4 text-xl font-semibold text-[#262A2C]">
                    {post.title}
                  </h1>
                  <p className="mt-2 flex-grow font-[400] text-[14px] text-[#787070]">
                    {post?.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    {post.author && (
                      <Avatar
                        name={post.author.name}
                        picture={post.author.picture}
                      />
                    )}
                    <Link href={`/posts/${post.slug}`}>
                      <h1
                        onClick={() => {}}
                        className="text-[#E17153] text-start font-[400] cursor-pointer"
                      >
                        Read Post
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
