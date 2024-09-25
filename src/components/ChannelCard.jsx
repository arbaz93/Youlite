import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture, demoChannelTitle } from '../utils/constants'

export default function ChannelCard({ channelDetail, marginTop }) {

  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: {xs: '100%', sm: '358px', md: "320px"}, height: '326px', margin: 'auto', marginTop }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant='h6' >
              {channelDetail?.snippet?.title || demoChannelTitle}
            </Typography>
              <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '5px' }} />
          </Box>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subcribers</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
