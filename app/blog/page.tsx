import { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import React from "react";
import { linkColors } from "../constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software engineering, and more.",
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          return new Date(a.date) > new Date(b.date) ? -1 : 1;
        })
        .map((post) => (
          <Link key={post.title} className="flex flex-col space-y-1 mb-4" href={post.url}>
            <p className={"text-base" + linkColors}>{post.title}</p>
            <p className="text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</p>
          </Link>
        ))}
    </section>
  );
}
