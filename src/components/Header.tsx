import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
