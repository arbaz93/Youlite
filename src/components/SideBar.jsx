import { Stack } from '@mui/material'
import { categories } from '../utils/categories'


export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories.map(category => {
        return (
          <button key={category.name} onClick={() => {setSelectedCategory(category.name)}} className='category-btn' style={{backgroundColor: (category.name === selectedCategory) && '#fc1503', color: 'white'}}>
            <span style={{ color: (category.name === selectedCategory) ? 'white' : '#f31503', marginRight: '15px' }}>{category.icon}</span>
            <span style={{ opacity: (category.name === selectedCategory) ? '1' : '0.8'}}>{category.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}
