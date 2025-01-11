import { getAllPosts } from "@/lib/getAllPosts";
import { Post } from "../types/posts";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const allPosts: Post[] = await getAllPosts();

  if (process.env.NODE_ENV === "production") {
    return redirect("/"); // Or redirect, or show a 404
  }

  return (
    <div>
      {allPosts.map((post) => {
        return (
          <ul key={post.slug}>
            <li>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              {post.publishDate}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
