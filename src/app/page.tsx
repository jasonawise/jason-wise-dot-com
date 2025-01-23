import { getLatestPost } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";
import Card from "./components/Card/Card";

export const metadata: Metadata = {
  title: "Jason A. Wise",
  description: "...",
};

export default async function Page() {
  const latestPost = await getLatestPost();
  const { slug, frontmatter } = latestPost;

  return (
    <div>
      <h2 className="mb-2">Latest Post</h2>
      <Link href={`/blog/${slug}`}>
        <Card>
          <h2 className="text-base">{frontmatter.title}</h2>
          <p className="text-xs">{frontmatter.date}</p>
          <p className="text-sm">{frontmatter.summary}</p>
        </Card>
      </Link>
    </div>
  );
}
