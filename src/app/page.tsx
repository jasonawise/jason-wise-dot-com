import { getPosts } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  if (!posts) return <p>no posts</p>;
  return (
    <div>
      {posts?.map((post) => {
        return (
          <Link key={post.slug} href={`posts/${post.slug}`}>
            {post.title}{" "}
          </Link>
        );
      })}
    </div>
  );
}
