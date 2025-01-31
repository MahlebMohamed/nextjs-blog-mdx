import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";

export function Mdx({ children }: { children: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source={children} />
    </Suspense>
  );
}
