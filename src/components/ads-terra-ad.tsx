'use client'
import React, { useEffect } from 'react';

import { cn } from '@/helpers/utils';

interface AdsterraProps {
  id: string;
  width: number;
  height: number;
  className?: string;
}

export function AdsterraAd({ id, width, height, className }: AdsterraProps) {
  useEffect(() => {
    const atOptions = {
      key: id,
      format: 'iframe',
      height: height,
      width: width,
      params: {}
    };

    const adOptionsScript = document.createElement('script');
    adOptionsScript.type = 'text/javascript';
    adOptionsScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;

    const invokeScript = document.createElement('script');
    invokeScript.src = `//www.topcreativeformat.com/${id}/invoke.js`;
    invokeScript.type = 'text/javascript';

    const adContainer = document.getElementById(`adsterra-ad-${id}`);
    if (adContainer) {
      adContainer.appendChild(adOptionsScript);
      adContainer.appendChild(invokeScript);
    }

    return () => {
      if (adContainer) {
        adContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id={`adsterra-ad-${id}`} className={cn("text-center my-5", className)}/>
  );
};
