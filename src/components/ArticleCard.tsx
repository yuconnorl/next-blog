import type { Post } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Link from 'next/link'

import CategoryLink from './CategoryLink'

interface Props {
  post: Post
}

const ArticleCard = ({ post }: Props) => {
  return (
    <article
      key={post.id}
      className='flex flex-col pt-5 pb-9 font-mono tracking-tight'
    >
      <Link
        href={post.url}
        className='flex flex-col text-2xl tracking-tight transition-opacity hover:opacity-60 lg:text-3xl'
      >
        <p>{post.title}</p>
      </Link>
      <div className='mb-6 mt-4 flex items-center gap-3 text-sm tracking-tighter text-main-gray md:mb-7 md:mt-5 md:gap-4'>
        <p>{dayjs(post.date).format('MMM DD, YYYY')}</p>
        <CategoryLink category={post?.category} />
      </div>
      <div className='font-sans-serif tracking-wide text-main-gray'>
        <p>{post.description}</p>
      </div>
    </article>
  )
}

export default ArticleCard
