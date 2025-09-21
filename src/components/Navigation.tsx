const Navigation = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-foreground font-medium">
          Chong | HCI Researcher and Designer
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
            className="text-black border-b-2 border-dashed border-black"
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