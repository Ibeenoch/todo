import axios from 'axios'

export const login = async (formdata) => await axios.post('http://localhost:3030/user/login', formdata)
export const register = async (formdata) => await axios.post('http://localhost:3030/user/register', formdata)
export const getMe = async() => {
  const { token} = JSON.parse(localStorage.getItem('user'))
  
   const response = await axios.get('http://localhost:3030/user/me', {  mode: 'no-cors', config: {
      headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, }
    }} )
  if(response){
    console.log(response)
  }
    return response.data
  
  }
export const createProfile = async ({dataprofile, navigate, toast}) => {
const { token } = JSON.parse(localStorage.getItem('user'))
console.log(token)
 const response = await axios.post('http://localhost:3030/profile/create', dataprofile, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})

if(response){
  navigate('/')
  toast.success('profile created')
}
console.log(response.data)
 return response.data
}

export const getProfile = async() => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/profile/me', {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )
console.log(response)
  return response.data

}

export const updateProfile = async({ dataprofile, navigate, toast }) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(token)
 const response = await axios.put('http://localhost:3030/profile/update', dataprofile, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
 
 if(response){
      navigate('/')
    toast.success('Profile updated') 
  } 
 
 console.log(response)
 return response.data
 
 
 }
 

export const createPost = async({data, navigate, toast}) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(token)
const response = await axios.post('http://localhost:3030/api/post/create', data, {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )

 if(response){
   navigate('/')
    toast.success('post successful')   
  }   
    console.log(response)
    return response.data
  }


export const updatePost = async({id, data, navigate, toast}) => {
 const { token } = JSON.parse(localStorage.getItem('user'))

const response = await axios.put(`http://localhost:3030/api/postupdate/${id}`, data, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}} )

if(response){
     navigate('/')
   toast.success('message updated') 
 } 

console.log(response)
return response.data


}


export const getPost = async() => {
const { token} = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/api/allpost', {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )
if(response){
  console.log(response)
}
  return response.data

}

export const getPostOfPerson = async(id) => {
  const { token} = JSON.parse(localStorage.getItem('user'))
  
   const response = await axios.get(`http://localhost:3030/api/post/${id}`, {  mode: 'no-cors', config: {
      headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
    }} )
  if(response){
    console.log(response)
  }
    return response.data
  
  }

  export const getMyPost = async() => {
    const { token} = JSON.parse(localStorage.getItem('user'))
    
     const response = await axios.get(`http://localhost:3030/api/mypost`, {  mode: 'no-cors', config: {
        headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      }} )
    if(response){
      console.log(response)
    }
      return response.data
    
    }

export const deletePost = async({postId, navigate, toast }) => {
 const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.delete(`http://localhost:3030/api/deletepost/${postId}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
 if(response){
   navigate('/')
   toast('Post deleted')
 }
 console.log(response)
 return response.data
 }

export const likePost = async({postId, toast, navigate}) => {
 const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.put(`http://localhost:3030/api/post/likes/${postId}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
if(response){
  toast.success('updating')
  navigate('/loadlike')
}
 return response.data
 }

 export const allUser = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/user', {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
//console.log(response.data)
return response.data
 }

 export const followers = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/user/followers', {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
console.log(response.data)
return response.data
 }

 export const following = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/user/following', {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
console.log(response.data)
return response.data
 }

 export const allProfile = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get('http://localhost:3030/profile', {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})

return response.data
 }



 export const followunfollow = async({id, toast, userId}) => {
const { token } = JSON.parse(localStorage.getItem('user'))
console.log(userId)

 const response = await axios.put(`http://localhost:3030/user/follow/${id}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
if(response){
  toast.success('updating')
 // navigate(`/loading/${userId}`)
}
 return response.data
 } 

 export const postComment = async({comments, id}) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
 



   const response = await axios.post(`http://localhost:3030/api/comment/${id}`, comments, {  mode: 'no-cors', config: {
     headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
   }} )
   console.log({comments: response.data})
   return response.data
   } 