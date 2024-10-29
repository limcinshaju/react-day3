import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <br />
        <br />
        <AppBar color='primary'>
            <Toolbar>
                <Typography variant='h6'>
                    New
                </Typography> &nbsp; &nbsp;
                <Link to='/sta'><Button variant='contained' color='secondary'>state</Button></Link> &nbsp;
                <Link to='/cta'><Button variant='contained' color='secondary'>Counter</Button></Link> &nbsp;
                <Link to='/dta'><Button variant='contained' color='secondary'>Display</Button></Link> &nbsp;

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar