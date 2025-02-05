import Link from "next/link";
import "./globals.css";

const Header = () => {
  return (
    <div className="h-32">
      <header className="w-full z-40 h-32 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between">
          <nav className="flex items-baseline gap-6 font-customFont">
            <Link href="/" className="text-3xl text-primary-300 pl-4">
              <span className="text-secondary-500">fredrikac</span>
              .dev
            </Link>
            <span>
              <Link className="text-md" href="/about">
                about
              </Link>
              {" | "}
              <Link className="text-md" href="/posts">
                blog
              </Link>
            </span>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
