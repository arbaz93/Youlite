import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromApi'


export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {setVideos(data.items)})

  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: 'column' }}>
        <Box  borderRight='1px solid #3d3d3d' px='0' >
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </Box>
        <Box p={2} sx={{ overflowY:'auto', height:'90vh', flex: '2'}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
            {selectedCategory} <span style={{color: '#f31503 '}}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
    </Stack>
  )
}
