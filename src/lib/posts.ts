import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "content");

const PostShema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean().optional().default(false),
});

type Post = z.infer<typeof PostShema> & {
  slug: string;
  content: string;
};

export async function getPosts() {
  const files = await fs.readdir(postsDirectory);
  const filesName = files.filter((file) => file.endsWith(".mdx"));

  const posts: Post[] = [];

  for await (const fileName of filesName) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const frontMatter = matter(fileContent);

    const selfData = PostShema.safeParse(frontMatter.data);

    if (!selfData.success) {
      console.error(`Error parsing file ${fileName}`);
      continue;
    }

    if (!selfData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...selfData.data,
      slug: fileName.replace(/^\d+-/, "").replace(".mdx", ""),
      content: frontMatter.content,
    });
  }

  return posts;
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
