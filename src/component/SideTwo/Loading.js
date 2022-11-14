import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { alluser } from '../../features/userSlice'

const Loading = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)

   const { id } = useParams()
    
   const findUser = useSelector((state) => id ? state.user.allUser.find((item) => (item._id === id)) : null )


 useEffect(() => {
const gohome = setInterval(() =>{
navigate(`/profile/${id}`)
}, 3000 )
 return () => clearInterval(gohome)
    }, [navigate])

    useEffect(() => {
       dispatch(alluser())
   }, [navigate, dispatch])


  return (
    <div  style={{fontSize: '4rem', marginTop: '5rem', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
     <CircularProgress /> Updating...</div>
  )
}

export default Loading