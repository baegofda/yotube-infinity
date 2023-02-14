import { map } from 'lodash';
import React, { useState } from 'react';
import { useVideos } from '../hooks/useVideos';
import InfiniteScroll from './InfiniteScroll';
import VideoItem from './VideoItem';

const Videos = () => {
    const [pageToken, setPageToken] = useState<string | undefined>();
    const {items, nextPageToken, isLoading} = useVideos(pageToken)

    const handleNext = async () => {
        setPageToken(nextPageToken)
    }

    return (
        <div>
            <InfiniteScroll onNext={handleNext} length={items?.length} isLoading={isLoading}>
                {map(items, (video, key) => <VideoItem key={key} item={video}/>)}
            </InfiniteScroll>
        </div>
    );
};


export default Videos;
