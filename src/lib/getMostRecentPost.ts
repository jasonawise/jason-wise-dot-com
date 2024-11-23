import { Post } from "@/app/types/posts";
import { getAllPosts } from "./getAllPosts";

export async function getMostRecentPost() {
  const allPosts: Post[] = await getAllPosts();

  const mostRecentPost = allPosts.reduce((latest, current) => {
    return new Date(current.publishDate) > new Date(latest.publishDate)
      ? current
      : latest;
  });

  return mostRecentPost;
}
