import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

type ScrollPositions = Record<string, number>;

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positionsRef = useRef<ScrollPositions>({});
  const previousKeyRef = useRef(location.key);

  useEffect(() => {
    // Save scroll position for the previous location
    positionsRef.current[previousKeyRef.current] = window.scrollY;

    if (navigationType === "POP") {
      // Browser back/forward – restore previous scroll position if we have it
      const savedY = positionsRef.current[location.key];
      window.scrollTo(0, savedY ?? 0);
    } else {
      // New navigation (e.g., clicking a link) – scroll to top
      window.scrollTo(0, 0);
    }

    // Update previous key for next navigation
    previousKeyRef.current = location.key;
  }, [location, navigationType]);

  return null;
};

export default ScrollRestoration;

