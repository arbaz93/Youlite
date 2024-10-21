import react from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoThumbnailUrl } from '../utils/constants'
import { CardContent, CardMedia, Card, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

export default function VideoCard({ video: { id: { videoId, playlistId }, snippet }, video }) {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId || playlistId ? `/video/${videoId || playlistId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId || playlistId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
  )
}
