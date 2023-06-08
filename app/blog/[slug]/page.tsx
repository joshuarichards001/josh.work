import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => {
  return allBlogs.map((blog: any) => ({ slug: blog._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: any) => {
  const blog = allBlogs.find((blog: any) => blog._raw.flattenedPath === params.slug);
  return { title: blog?.title };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog: any) => blog._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!blog) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(blog!.body.code);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{blog.title}</h1>
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 text-sm">
        {new Date(blog.date).toLocaleDateString()}
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXContent />
      </article>
    </section>
  );
};

export default BlogLayout;
