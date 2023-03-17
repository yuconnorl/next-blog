/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import { allPosts, type Post } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Balancer from 'react-wrap-balancer'

import CommentSection from '@/components/CommentSection'
import Footer from '@/components/Footer'
import Mdx from '@/components/Mdx'
import SidePanel from '@/components/SidePanel'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface Props {
  params: Post
}

export default async function Blog({ params }: Props) {
  const post: Post | undefined = allPosts.find(
    (post) => post.slug === params.slug,
  )

  if (!post) {
    // TODO: handle no post
    console.log('no post')
  }

  return (
    <div className='relative flex max-w-6xl pt-8 font-sans-serif xl:grid xl:grid-cols-section xl:gap-7'>
      <section className='col-start-2 mx-auto max-w-4xl'>
        <h1 className='font-mono text-2xl font-bold tracking-tight md:text-3xl'>
          <Balancer>{post?.title}</Balancer>
        </h1>
        <div className='mb-6 mt-4 font-mono tracking-tighter text-main-gray'>
          <p>{dayjs(post?.date).format('MMM DD, YYYY')}</p>
        </div>
        <Mdx code={post?.body.code} />
        <CommentSection />
        <Footer />
      </section>
      <SidePanel rawPost={post?.body.raw} />
    </div>
  )
}
