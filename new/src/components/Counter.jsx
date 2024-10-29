import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
            var[count,setCount]=useState(0);
            

            const addNumber=()=>{
                console.log("addNumber btn clicked");
                setCount(count++);
                 }
                 const SubNumber=()=>{
                    console.log("SubNumber btn clicked");
                    setCount(count--);
                 }
  return (
    <div>
        <Typography variant='h4'>count:{count}</Typography>
        <Button variant='contained' color='success' onClick={addNumber}>+</Button> &nbsp;
        <Button variant='contained' color='error' onClick={SubNumber}>-</Button>
    </div>
  )
}

export default Counter