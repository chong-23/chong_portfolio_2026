const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div>
          © 2024 Chong Hu. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-1">
          Created by 
          <span className="text-red-500">❤️</span>
          and 
          <span className="text-red-500">❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;