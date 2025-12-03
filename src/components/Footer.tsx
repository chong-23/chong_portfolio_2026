import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      {/* Light gray section with back link and copyright */}
      <div className="bg-[#F5F5F5] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity mb-6"
          >
            ◂ Back to home screen
          </Link>
          <p className="text-sm text-muted-foreground">© 2024 Chong Hu. All rights reserved.</p>
        </div>
      </div>
      {/* Dark section */}
      <div className="bg-[#2A2A2A] h-24" />
    </footer>
  );
};

export default Footer;
