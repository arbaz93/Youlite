import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px'}}></Box>
        <ChannelCard channelDetail={channelDetail} marginTop={'-120px'}/>
        <Box display='flex' p='2px'>
          <Box sx={{ display: 'flex'}}>
            <Videos videos={videos} align={'center'} />
          </Box>
        </Box>
    </Box>
  )
}
