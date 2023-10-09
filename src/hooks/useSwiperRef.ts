import { useEffect, useRef, useState } from 'react';

const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState<any>(null);
    const ref = useRef<any>(null);

    useEffect(() => {
        setWrapper(ref.current);
    }, []);

    return [wrapper, ref];
};

export default useSwiperRef;
