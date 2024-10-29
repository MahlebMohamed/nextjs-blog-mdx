import { Mdx } from "@/features/mdx/Mdx";
import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function RoutePage(porps: { params: { slug: string } }) {
  const post = await getPost(porps.params.slug);

  if (!post) {
    notFound();
  }
  return (
    <div className="prose prose-sm lg:prose-lg">
      <p className="text-sm text-muted-foreground">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
    </div>
  );
}
