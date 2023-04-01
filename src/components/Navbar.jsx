import { Link,Box,AppBar,Typography,Button,Toolbar } from '@mui/material'
import React from 'react'


const Navbar = () => {
  return (
    <Box>
    <AppBar >
      <Toolbar>
        <Typography variant="h6" component="div">shopping cart</Typography>
        <Button color="inherit"><Link to='/' style={{color:'white',textDecoration:'none'}}>View</Link></Button>
        <Button color="inherit"><Link to='/add' style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
