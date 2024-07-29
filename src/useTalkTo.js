import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/66a7382932dca6db2cb6eeb6/1i3uj6olj';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0.parentNode.insertBefore(s1, s0);

    return () => {
      s1.parentNode.removeChild(s1);
    };
  }, []);
};

export default useTawkTo;
