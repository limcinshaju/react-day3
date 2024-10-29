import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Display = () => {
  var [name,setButton]=useState();

      const firstButton=()=>{
        // var name="React"
        // console.log("firstButton btn clicked");
        setButton("React");

      }
      const secondButton=()=>{
        // var name="React"
        // console.log("secondButton btn clicked");
        setButton("Angular");

      }
      const thirdButton=()=>{
        // var name="React"
        // console.log("thirdButton btn clicked");
        setButton("Next");

      }
      // use effect
      useEffect(()=>{
        secondButton()
      },[])
  return (
    <div>
      <br />
      <br />
      <Typography variant='h2'>Welcome: {name}</Typography><br />
      <Button variant='contained' color='primary' onClick={firstButton}>React</Button> &nbsp;
      <Button variant='contained' color='secondary' onClick={secondButton} >Angular</Button> &nbsp;
      <Button variant='contained' color='success'  onClick={thirdButton}>Next</Button> &nbsp;
      
    </div>
  )
}

export default Display