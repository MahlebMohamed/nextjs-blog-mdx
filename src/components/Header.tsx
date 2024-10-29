import Link from "next/link";

export default function Header() {
  return (
    <header className="my-4 flex items-center gap-2 rounded-lg bg-card p-3 shadow-xl">
      <p>
        Codelynx<span className="text-primary">.dev</span>
      </p>
      <div className="ml-auto" />
      <Link href="/" className="text-primary">
        Posts
      </Link>
    </header>
  );
}
