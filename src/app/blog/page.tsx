import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
