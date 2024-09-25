import { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

export default function Navbar() {
  const mediaMatch = window.matchMedia('(max-width: 386px)');
  const [showInput, setShowInput] = useState(true)
  useEffect(() => {
    if(mediaMatch.matches) {
      setShowInput(false)
    }
  }, [])
  function handleInputSize() {
    if(mediaMatch.matches) {
      setShowInput(!showInput)
    }
  }
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{position: 'sticky', 
        backgroundColor:'#000', 
        top:'0', 
        justifyContent:'space-between'}}
    >
      <Link to='/' style={{display: (mediaMatch.matches && showInput) ? 'none' : 'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar handleInputSize={handleInputSize} mediaMatch={mediaMatch} showInput={showInput}/>

    </Stack>
  )
}
