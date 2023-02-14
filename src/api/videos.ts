import axios from 'axios'
import { VideosResponse } from '../types/videos'

export const API_KEY = 'AIzaSyCP0bt4o4sUnuOSbFPW5gVek63x4AXDi_0'

export const fetchVideos = async params => {
  const { data }: { data: VideosResponse } = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params,
  })

  return data
}
