import Link from "next/link";
import "./globals.css";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-8">
        <span>
          <Link className="text-lg" href="/about">
            About
          </Link>
          {" | "}
          <Link className="text-lg" href="/posts">
            Posts
          </Link>
        </span>
        <Link href="/" className="font-customFont text-2xl">
          fredrikac.dev
        </Link>
      </nav>
    </header>
  );
};

export default Header;
