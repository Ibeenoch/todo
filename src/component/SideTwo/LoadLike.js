import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadLike = () => {
    const navigate = useNavigate()
    useEffect(() => {
const gohome = setInterval(() =>{
navigate('/')
}, 3000
)

 return () => clearInterval(gohome)
    }, [navigate])

  return (
    <div style={{fontSize: '4rem', marginTop: '5rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}> <CircularProgress /> Updating...</div>
  )
}

export default LoadLike