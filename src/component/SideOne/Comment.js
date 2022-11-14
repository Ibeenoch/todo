import { Box, TextField, Typography } from '@material-ui/core'
import { ArrowBack, MenuOpenOutlined, Send } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, postComment } from '../../features/blogSlice'
import Comments from './Comments'

const Comment = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const {profile, allProfile} = useSelector((state) => state.profile)
    const {isLoading, user, followed, allUser} = useSelector((state) => state.user)
    const { blogg, isSuccess, updated, commentz } = useSelector((state) => state.blogs )

    const [word, setWord] = useState({
      comments: {
        comment: ''
      }   
   })
   
   const { comment, comments } = word

   const findcomment = useSelector((state) => id ? state.blogs.blogg.find((item) => (item._id === id)) : null )
   const times = findcomment.createdAt

   const handleChange = (e) => {
    e.preventDefault()
  const { name, value } = e.target
  setWord(prevState => {
    return {
        ...prevState, 
        comments: {
          ...prevState.comments,
           comment: value
        }
    }
  })
  console.log({ 'comments': comments}) 
  }
   
    const backHome = () => {
        navigate('/')
    }

    const handlecomment = (e) => {
      e.preventDefault()
      console.log(comments)
     return Promise.all([dispatch(postComment({comments, id})), dispatch(getPost())]) 
 
  }


 
  return (
    <div style={{ width: '70vw', height: '100vh', marginLeft: '15vw', borderRadius: '1.2rem'}}>
        <Box sx={{ width: '90%', height: 'auto',marginLeft: '5%', background: 'white', borderRadius: '1.2rem', boxShadow: '0 0 1rem gray'}} >
          <div style={{background: 'gray', borderTopLeftRadius: '1.2rem', borderTopRightRadius: '1.2rem', color: 'white'}}>
              <Typography variant='h5' align='center' style={{ fontSize: '500', paddingTop: '0.7rem'}} >Comment</Typography>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'gray', padding: '1rem'}}>
         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', columnGap: '1.2rem'}}>
              <div onClick={backHome} style={{cursor: 'pointer'}}>
                  <ArrowBack />
              </div>
              <div>
                <img src={user.user.profilepics.url || profile.fetchProfile.map((item) => item.profilepics.url)} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
              </div>  
              <div>
                <Typography variant='h4'>{user.user.name} </Typography>
             </div>
          </div>

          <div>
              <MenuOpenOutlined />
          </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}>
          {commentz.map((post) => (
        <Comments key={post._id} post={post} times={times} />
           ))}
          </div>

         
        <form onSubmit={handlecomment}>
          <div style={{ position: 'relative', top: '100vh'}}>
             <div style={{ display: 'flex', borderRadius: '1.2rem', background: 'white', boxShadow: '0 0 0.4rem gray', width: '90%', marginLeft: '1.5rem', padding:'1.2rem'}}>
              <TextField type='text' multiline={true} rows={2}  variant='outlined' fullWidth label="what's on your mind " name='comments[omment]' value={word.comment} onChange={handleChange} />
             <button  type='submit' >
                 <Send />
             </button>
              </div>
          </div>
             
          </form> 
       
        </Box>
    </div>
  )
}

export default Comment