import Link from "next/link";
import "./globals.css";

const Header = () => {
  return (
    <div className="h-32">
      <header className="w-full z-40 h-32 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between">
          <nav className="flex items-center gap-6">
            <Link href="/" className="font-customFont text-3xl">
              fredrikac.dev
            </Link>
            <span>
              <Link className="text-lg" href="/about">
                About
              </Link>
              {" | "}
              <Link className="text-lg" href="/posts">
                Posts
              </Link>
            </span>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
