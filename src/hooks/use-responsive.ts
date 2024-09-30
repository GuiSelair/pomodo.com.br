'use client';
import { useEffect, useState } from "react";

interface UseResponsiveProps {
  shouldListen?: boolean;
}

export function useResponsive({ shouldListen = true }: UseResponsiveProps = {}) {
  const [state, setState] = useState(getResponsive);

  useEffect(() => {
    onResizeHandler();
    
    if (shouldListen) {
      setup();
    }

    return () => {
      cleanup();
    };
  }, []);

  function getResponsive() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    return { isMobile, isTablet, isDesktop };
  }
  
  function onResizeHandler() {
    const { isMobile, isTablet, isDesktop } = getResponsive();

    setState({ isMobile, isTablet, isDesktop });
  };

  function setup() {
    window.addEventListener("resize", onResizeHandler, false);
  };

  function cleanup() {
    window.removeEventListener("resize", onResizeHandler, false);
  };
  
  return state;
};