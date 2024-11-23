import { getMostRecentPost } from "@/lib/getMostRecentPost";
import { Metadata } from "next";
import Link from "next/link";
import Card from "./components/Card/Card";

export const metadata: Metadata = {
  title: "Jason A. Wise",
  description: "...",
};

export default async function Page() {
  const mostRecentPost = await getMostRecentPost();

  return (
    <div>
      <Link href={`/posts/${mostRecentPost.slug}`}>
        <Card>{mostRecentPost.title}</Card>
      </Link>
    </div>
  );
}
