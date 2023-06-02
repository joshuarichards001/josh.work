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
    <div>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">{blog.title}</h1>
      <article>
        <MDXContent />
      </article>
    </div>
  );
};

export default BlogLayout;
