import { getAllPosts } from "@/lib/getAllPosts";
import { Post } from "../types/posts";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  if (process.env.NODE_ENV === "production") {
    return redirect("/");
  }

  const allPosts: Post[] = await getAllPosts();
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
