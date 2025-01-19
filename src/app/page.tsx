import { getLatestPost } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jason A. Wise",
  description: "...",
};

export default async function Page() {
  const latestPost = await getLatestPost();
  const { slug, frontmatter } = latestPost;
  return (
    <div>
      <div>
        <h1>Home</h1>
        <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
      </div>
    </div>
  );
}
