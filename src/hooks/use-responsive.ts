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
      if (typeof window === 'undefined') return;
      window.addEventListener("resize", onResizeHandler, false);
    }

    return () => {
      if (typeof window === 'undefined') return;
      window.removeEventListener("resize", onResizeHandler, false);
    };
  }, []);

  function getResponsive() {
    if (typeof window === 'undefined') return { isMobile: false, isTablet: false, isDesktop: false };
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    return { isMobile, isTablet, isDesktop };
  }
  
  function onResizeHandler() {
    const { isMobile, isTablet, isDesktop } = getResponsive();

    setState({ isMobile, isTablet, isDesktop });
  };
  
  return state;
};