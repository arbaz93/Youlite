import { Box, Typography } from '@mui/material'

export default function ErrorDetail({ err }) {
  return (
    <Box>
        <Typography>{err}</Typography>
    </Box>
  )
}
