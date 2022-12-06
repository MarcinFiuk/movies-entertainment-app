import { useState, useEffect } from 'react';

const useMatchMedia = (queryString: string) => {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>(null!);

    useEffect(() => {
        const list = window.matchMedia(queryString);
        setIsMatch(list.matches);
        setMediaQueryList(list);
    }, [queryString]);

    useEffect(() => {
        if (!mediaQueryList) return;

        const handler = () => {
            setIsMatch(mediaQueryList.matches);
        };

        mediaQueryList.addEventListener('change', handler);

        return () => {
            mediaQueryList.removeEventListener('change', handler);
        };
    }, [mediaQueryList]);
    return isMatch;
};

export default useMatchMedia;
