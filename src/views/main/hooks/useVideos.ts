import { API_KEY, fetchVideos } from '@/src/api/videos'
import { Item, VideosResponse } from '@/src/types/videos'
import { useEffect, useState } from 'react'

export const useVideos = (pageToken: string | undefined) => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState<VideosResponse>()
  const [items, setItems] = useState<Item[]>([])

  const getVideos = async () => {
    setStatus('loading')
    try {
      const res = await fetchVideos({
        key: API_KEY,
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'kr',
        maxResults: 10,
        pageToken,
      })

      setData(res)
      setItems([...items, ...(res?.items || [])])
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  console.log(data)

  useEffect(() => {
    getVideos()
  }, [pageToken])

  return {
    items,
    nextPageToken: data?.nextPageToken,
    status,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}
