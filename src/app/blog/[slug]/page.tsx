import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

interface Params {
  slug: string;
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = params;
  const { frontmatter, content } = getPostBySlug(slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
