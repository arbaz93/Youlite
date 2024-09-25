import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
export default function SearchBar({ showInput, handleInputSize, mediaMatch }) {
  const [searchQuery, setsearchQuery] = useState('')
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(searchQuery) {
      navigate(`/search/${searchQuery}`)
      setsearchQuery('')
    }
  }
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: (showInput) ? 2 : 0,
        boxShadow: 'none',
        mr: { sm: 5 },
        width: (showInput && mediaMatch.matches) ? '100%' : 'auto',
        display: 'flex'
      }}
    >
      <input type="text" className='search-bar ' placeholder='search...' style={{width: showInput ? 'auto' : '0', padding: 0, flex: 1 }} value={searchQuery} onChange={(e) => { setsearchQuery(e.target.value) }} />
      <IconButton right='0' type='submit' color='red' onClick={handleInputSize}>
        <Search />
      </IconButton>
    </Paper>
  )
}