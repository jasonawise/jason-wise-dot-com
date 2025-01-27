import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import formatDate from "@/lib/helpers/formatDate";

// Explicitly type the expected structure of params
export default async function BlogPost({ params }) {
  const { slug } = await params;

  const { frontmatter, content } = getPostBySlug(slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p className="text-sm font-extralight">{formatDate(frontmatter.date)}</p>
      <MDXRemote source={content} />
    </article>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}
