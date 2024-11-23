import { Post } from "@/app/types/posts";
import { readdir } from "fs/promises";

export async function getAllPosts(): Promise<Post[]> {
  const slugs = (
    await readdir("./src/app/posts", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/posts/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  return posts;
}
