import { useEffect, useRef, useState } from "react";

export const useIntersection = () => {
    const observerRef = useRef<HTMLDivElement | null>(null)
    const [inView, setInView] = useState(false)
    
    useEffect(() => {
        let callback = (entries, observer) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting)
            });
          };

        const observer = new IntersectionObserver(callback, {
            threshold: 0
        })
    
        if(observerRef.current) {
            observer.observe(observerRef.current)
        }

        return () => {    
            if(observerRef.current) {
                observer.unobserve(observerRef.current)
            }
        }
    }, [])


    return [observerRef, inView]
}
