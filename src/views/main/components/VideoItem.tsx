import styled from '@emotion/styled'
import { Item } from '@/src/types/videos'
import React from 'react'
import { useIntersection } from '../hooks/useIntersection'
import cn from 'classnames'

interface Props {
    item: Item
}

export default function VideoItem({item}: Props) {
  const [ref, inView] = useIntersection()
  
  return (
    <Contnainer ref={ref} className={cn({inView})}>
       <div className="thumb">
            <img src={item.snippet.thumbnails.high.url} alt="" />
       </div>
       <div className="description"></div>
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.description}</p>
    </Contnainer>
  )
}

const Contnainer = styled.div`
    transform: translateY(50px);
    opacity: 0;
    transition: 0.5s;
    &.inView {
        transform: none;
        opacity: 1
    }

`
