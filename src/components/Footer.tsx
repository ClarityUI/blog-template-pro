const Footer = () => {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} ClarityUI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
