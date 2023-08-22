import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">My Blog</div>
          <div className="flex space-x-6">
            <Link href="/">
              <p className="hover:text-gray-300">Home</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-gray-300">About</p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-gray-300">Blog</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-300">Contact</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}