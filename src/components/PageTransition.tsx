import { useLocation, useOutlet } from "react-router-dom";

const PageTransition = () => {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in">
      {outlet}
    </div>
  );
};

export default PageTransition;
