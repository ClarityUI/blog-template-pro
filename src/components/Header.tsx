import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-b border-slate-200 py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        {/* Tu bude v budúcnosti navigačné menu */}
        <nav>{/* <a href="/about">About</a> */}</nav>
      </div>
    </header>
  );
};

export default Header;
