import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[name,setname]=useState("")
    var [val,setval]=useState()

    const handleInput=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }

    const buttonClick=()=>{
        setval(name)
    }
  return (
    <div>
        <br />
        <h1>
            <Typography variant='h6'>
                welcome {val}
            </Typography>
            <TextField variant='outlined' onChange={handleInput} label='Enter name'></TextField>
            <br />
            <Button variant='contained' onClick={buttonClick}>Click Me</Button>
        </h1>
    </div>
  )
}

export default Statebasics