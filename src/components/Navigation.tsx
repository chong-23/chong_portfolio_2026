import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  variant?: "default" | "light";
}

const Navigation = ({ variant = "default" }: NavigationProps) => {
  const isLight = variant === "light";
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-me";
  const isHomePage = location.pathname === "/";
  
  return (
    <nav className="relative z-10 w-full py-6 px-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className={`${isLight ? "text-white" : "text-foreground"} hover:opacity-80 transition-opacity cursor-pointer`}>
          <span className="font-bold">Chong</span>
          <span className={`${isLight ? "text-white/60" : "text-muted"} mx-2`}>|</span>
          <span className="font-light">HCI Researcher and Designer</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <a 
            href="#research" 
            className={`${isLight ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"} transition-colors duration-200`}
          >
            Research
          </a>
          <Link 
            to="/" 
            className={`${isLight ? "text-white" : "text-black"} ${isHomePage && !isAboutPage ? "border-b-2 border-dotted" : ""} ${isLight ? "border-white" : "border-black"}`}
          >
            Design
          </Link>
          <Link 
            to="/about-me" 
            className={`${isAboutPage 
              ? (isLight ? "text-white border-b-2 border-dotted border-white" : "text-black border-b-2 border-dotted border-black") 
              : (isLight ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground")} transition-colors duration-200`}
          >
            About me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;