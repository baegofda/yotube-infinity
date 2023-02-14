import React, { useEffect } from 'react'
import { useIntersection } from '../../hooks/useIntersection';


export default function InfiniteScroll({children, length, onNext, isLoading}: any) {
    const [ref, inView] = useIntersection()
  
    useEffect(() => {
        if(!inView || length === 0 || isLoading) return;
        onNext()
    }, [inView])
    
  return (
    <div>
        {children}
        <div ref={ref} className="h-[100px] flex bg-[#18f]">loading</div>
    </div>
  )
}
