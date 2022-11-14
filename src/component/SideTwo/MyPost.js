import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Input,  Typography} from '@material-ui/core'
import { More, ThumbUpAlt, Comment,  Bookmark, Send } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPost, likePost } from '../../features/blogSlice'
import { toast } from 'react-toastify'


const MyPost = ({ post }) => {
const navigate = useNavigate()
const dispatch = useDispatch()
const [show, setShow] = useState(false)
const [visible, setVisible] = useState(true)
const { profile } = useSelector((state) => state.profile )
const { likes } = useSelector((state) => state.blogs )
const { user } = useSelector((state) => state.user )

const handleshow = () => {
  setShow(!show)
}

const handlevisible = () => {
  setVisible(!visible)
}

const comments = () => {
  navigate(`/comment/${post._id}`)
}



const handledelete = async() => {
  if(window.confirm('Are You Sure You Want To Delete This Post')){
     const postId = post._id
  return await Promise.all([dispatch(deletePost({postId, navigate, toast })), dispatch(getPost())])    

  }
 }

  const handlelike = async() => {
    const postId = post._id    
    dispatch(likePost({postId, toast, navigate}))
    
    }
 
    
      const editPost = () => {
        navigate('/postpage')
      }

 

      const hide = (e) =>{
       e.target.style.display = 'none'
      }
    return (
        <>
         <Box sx={{ backgroundColor: 'white', borderRadius: '1.2rem', marginTop: '1rem', marginBottom: '1rem'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', padding:'1.2rem'}} >

 <div  style={{display: 'flex', padding: '0.6rem', alignItems: 'center'}}>
  <img src={post.owner.profilepics.url} onError={hide} style={{ width:'50px', cursor: 'pointer', height: '50px', borderRadius: '50%', marginRight: '0.9rem'}} />
  <div className="header" style={{ display: 'flex', flexDirection: 'column'}}>
    <Typography variant='h9'>{post.owner.name} </Typography>
    <Typography variant='h9'>{post.createdAt.slice(0, 10)} </Typography>
  </div>
</div>

   <div className="logo"  style={{cursor: 'pointer'}}>
    <div onClick={handleshow}   style={{display: (show ? 'none': 'block'  ) }}>
      <More />
      </div> 

<div  onBlur={handleshow}  style={{display: (show ? 'flex' : 'none'), right: '40vw' ,border: '0.3px solid grey' , cursor: 'pointer', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', position: 'absolute' , width:'65px', height: '100px', background: 'white', borderRadius: '1rem'}}>
 <Link to={`/postpage/${post._id}`} style={{color: 'black'}}>
 <div ><Typography variant='h6'  >Edit</Typography> </div>
 </Link>  
   <div onClick={handledelete}>
     <Typography variant='h6' >Delete</Typography> 
     </div>
   </div>
   </div>
 
</div>


<div style={{ 'padding': '1.2rem'}}>
      <Typography variant='h7' >{post.post}</Typography>
</div>

<div className="post-img" style={{  padding: '1.2rem'}}>
<img src={post.img.url} style={{ width: '100%', height: 'auto', borderRadius:'1.2rem',}} />
</div>

<div className="icon" style={{display: 'flex', justifyContent: 'space-between', padding: '1.2rem'}}>
<div className="left" style={{display: 'flex', columnGap: '1rem'}}>
 <div onClick={handlelike}>
  {post.likes.length} <ThumbUpAlt /> 
   </div>
 <div onClick={comments}>{post.comments.length} <Comment /> </div>

</div>

<div className="right">
 <Bookmark />
</div>
</div>

<Box onClick={comments} sx={{display: 'grid', gridTemplateColumns: '3vw auto', padding: '1.5rem 2rem', background: 'white'}}>
<img src={profile.fetchProfile.map((item) => item.profilepics.url)} style={{width: '40px', zIndex:'3', height: '40px', borderRadius: '50%'}} />
<div style={{ borderRadius: '1.2rem', background: 'white', display: 'flex', background: 'white'}}>
 <Input placeholder='write a comment' variant="contained" fullWidth/>
 <Send/>
</div>
</Box>

</Box >   
</>
    )
}

export default MyPost
