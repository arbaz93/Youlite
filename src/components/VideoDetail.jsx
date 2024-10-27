import { useState, useEffect, useRef} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos, NextVideo, ToggleSwitch } from './'

import { fetchFromAPI } from '../utils/fetchFromApi'

export default function VideoDetail() {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)
  const [nextVideos, setNextVideos] = useState(null)
  const [isVideoEnd, setIsVideoEnd] = useState(false)
  const { id } = useParams()
  const intervalRef = useRef()
  let playNextVidRef = useRef(localStorage.getItem('yt-auto'))  


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetails(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => {
        setVideos(data.items); 
        setNextVideos(data.items[0])
      })
  }, [id])

  function playNextVideo() {
    if (playNextVidRef.current === 'true') {
      setIsVideoEnd(true)
      const intervalId = setTimeout(() => {
        location.href = `https://youlite-tube.netlify.app/video/${nextVideos.id.videoId}`
      }, 5000)
      intervalRef.current = intervalId;
    }
  }
  function endInterval() {
    setIsVideoEnd(false)
    clearInterval(intervalRef.current)
  }
  if(!videoDetails?.snippet) return '...loading'
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex='1'>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} onPlay={() => endInterval()} onEnded={playNextVideo} playing={playNextVidRef.current === 'true' ? true : false} className="react-player" controls/>
            {isVideoEnd && <NextVideo endInterval={endInterval} nextVid={nextVideos}/>}
            <Typography display='flex' justifyContent='space-between' color='#FFF' variant='h5' fontWeight='bold' p={2}>{title}<button className='only-text-btn'><ToggleSwitch playNextVidRef={playNextVidRef}/></button></Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#FFF'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant='subtitle1'color='#FFF'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />  
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(viewCount).toLocaleString()} views</Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
           
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <Typography color='#FFF' fontSize='20px' fontWeight={500} mb={1} sx={{opacity: .9}}>Related videos</Typography>
          <Videos videos={videos} direction={{xs: 'row', md: 'column'}}/>
        </Box>
      </Stack>
    </Box>
  )
}
