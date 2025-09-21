const Navigation = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-foreground">
          <span className="font-bold">Chong</span>
          <span className="text-muted mx-2">|</span>
          <span className="font-light">HCI Researcher and Designer</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a 
            href="#research" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Research
          </a>
          <a 
            href="#design" 
            className="text-black border-b-2 border-dotted border-black"
          >
            Design
          </a>
          <a 
            href="#resume" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;