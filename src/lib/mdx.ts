// lib/mdx.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data, content };
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug));
};

export const getLatestPost = () => {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });

  return posts[0];
};
