import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "default" | "project";
}

const Footer = ({ variant = "default" }: FooterProps) => {
  if (variant === "project") {
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
  }

  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div>© 2026 Chong Hu. All rights reserved.</div>
        <div className="mt-4 md:mt-0 flex items-center gap-1">
          Created by
          <span className="text-red-500">☕️</span>
          and
          <span className="text-red-500">🤖</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
