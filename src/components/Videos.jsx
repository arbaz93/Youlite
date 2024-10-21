import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from './'
export default function Videos({ videos, align, direction }) {
  if(!videos?.length) return '...loading'

  return (
    <Stack direction='column' flexWrap="wrap" justifyContent={align} alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} width='100%'>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.playlistId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
