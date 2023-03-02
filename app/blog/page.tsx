import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog posts",
  description: "blog postas",
};

const BlogPage = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <h1 className="mb-5 font-sans-serif text-3xl font-bold">Blog</h1>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          return (
            <Link
              key={post.id}
              className="mb-4 flex flex-col space-y-1 font-sans-serif "
              href={post.url}
            >
              <div className="flex w-full flex-col font-sans-serif text-3xl">
                <p>{post.title}</p>
              </div>
              <div className="font-sans-serif text-sm text-[#8e8e8e] ">
                <p>{post.date}</p>
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default BlogPage;
