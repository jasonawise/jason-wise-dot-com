import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import formatDate from "@/lib/helpers/formatDate";

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <p className="text-base font-semibold">{frontmatter.title}</p>
              <p className="text-xs font-light">
                {formatDate(frontmatter.date)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
