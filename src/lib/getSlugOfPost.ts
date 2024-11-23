import { Post } from "@/app/types/posts";

export function getSlugOfPost(post: Post): string {
  const slug = post.slug;

  return slug;
}
