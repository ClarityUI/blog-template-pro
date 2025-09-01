const Footer = () => {
  return (
    <footer className="border-t border-slate-200 mt-16 py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ClarityUI. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
