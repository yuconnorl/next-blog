/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Balancer from 'react-wrap-balancer'

import Mdx from '@/components/Mdx'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Blog({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    console.log('no post')
  }

  return (
    <section className='mx-auto max-w-5xl'>
      <h1 className='text-3xl font-bold'>
        <Balancer>{post?.title}</Balancer>
      </h1>
      <div className='mb-6 mt-4 text-[#999999]'>
        <p>{dayjs(post.date).format('MMM DD, YYYY')}</p>
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
