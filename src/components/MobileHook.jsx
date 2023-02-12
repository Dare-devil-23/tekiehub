import { useState, useEffect } from 'react';

const MobileHook = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600 ? true : false)
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600 ? true : false);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [])
    return isMobile
};

export default MobileHook;
