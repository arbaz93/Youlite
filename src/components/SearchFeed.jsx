import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromApi'


export default function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchQuery } = useParams()
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`)
      .then(data => { setVideos(data.items) })

  }, [searchQuery])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search result for: <span style={{ color: '#f31503 ' }}>{searchQuery}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
