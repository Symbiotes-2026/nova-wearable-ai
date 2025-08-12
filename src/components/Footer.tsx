const Footer = () => {
  const links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Careers" }
  ];

  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-gradient-primary"></div>
            <span className="text-lg font-bold text-gradient">Nova</span>
          </div>
          
          <nav className="flex items-center space-x-6 mb-4 md:mb-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-muted-foreground">
            © 2024 Nova
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;