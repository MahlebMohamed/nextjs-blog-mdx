import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="mb-4 mt-12 text-4xl font-bold text-red-500">
        404 - Article introuvable
      </h1>
      <p className="mb-8 text-xl text-gray-600">
        Désolé, l'article que vous recherchez n'existe pas.
      </p>
      <Link
        href="/"
        className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
