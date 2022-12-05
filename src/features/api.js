import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.url

export const login = async (formdata) => await axios.post(`${url}/user/login`, formdata)
export const register = async (formdata) => await axios.post(`${url}/user/register`, formdata)
export const getMe = async() => {
  const { token} = JSON.parse(localStorage.getItem('user'))
  
   const response = await axios.get(`${url}/user/me`, {  mode: 'no-cors', config: {
      headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, }
    }} )
  if(response){
    console.log(response)
  }
    return response.data
  
  }


  export const getPerson = async(id) => {
    const { token} = JSON.parse(localStorage.getItem('user'))
    
     const response = await axios.get(`${url}/user/findperson/${id}`, {  mode: 'no-cors', config: {
        headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, }
      }} )
    if(response){
      console.log(response)
    }
      return response.data[0]
    
    }


export const createProfile = async({dataprofile, navigate, toast}) => {
  const { token } = JSON.parse(localStorage.getItem('user'))

console.log(token) 
const option = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: dataprofile
}
const response = await fetch(`${url}/profile/create`, option)

if(response){
  navigate('/')
  toast.success('profile created')
}
console.log(response)
console.log(response.data)
 return response.data
}

export const getProfile = async() => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get(`${url}/profile/me`, {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )
console.log(response)
  return response.data

}

export const updateProfile = async({ dataprofile, navigate, toast }) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(token)
 const response = await axios.put(`${url}/profile/update`, dataprofile, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
 
 if(response){
      navigate('/profile')
    toast.success('Profile updated') 
  } 
 
 console.log(response)
 return response.data
 
 
 }
 

export const createPost = async({data, navigate, toast}) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
  console.log(token)
const response = await axios.post(`${url}/api/post/create`, data, {  mode: 'no-cors', config: {
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

const response = await axios.put(`${url}/api/postupdate/${id}`, data, {  mode: 'no-cors', config: {
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

 const response = await axios.get(`${url}/api/allpost`, {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )
if(response){
  console.log(response)
}
  return response.data

}

export const getPostOfPerson = async(id) => {
  const { token} = JSON.parse(localStorage.getItem('user'))
  
   const response = await axios.get(`${url}/api/post/${id}`, {  mode: 'no-cors', config: {
      headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
    }} )
  if(response){
    console.log(response)
  }
    return response.data
  
  }

  export const getMyPost = async() => {
    const { token} = JSON.parse(localStorage.getItem('user'))
    
     const response = await axios.get(`${url}/api/mypost`, {  mode: 'no-cors', config: {
        headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      }} )
    if(response){
      console.log(response)
    }
      return response.data
    
    }

export const deletePost = async({ postId }) => {
 const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.delete(`${url}/api/deletepost/${postId}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )

 console.log(response)
 return response.data
 }

export const likePost = async({postId}) => {
 const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.put(`${url}/api/post/likes/${postId}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )

 return response.data
 }

 export const allUser = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get(`${url}/user`, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
//console.log(response.data)
return response.data
 }

 export const followers = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get(`${url}/user/followers`, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
console.log(response.data)
return response.data
 }

 export const following = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get(`${url}/user/following`, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})
console.log(response.data)
return response.data
 }

 
 export const deleteuser = async({ navigate, toast }) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
 
  const response = await axios.delete(`${url}/user/delete`, {  mode: 'no-cors', config: {
    headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
  }} )
  if(response){
    navigate('/login')
    toast.success('user deleted')
  }
  console.log(response)
  return response.data
  }
 

 

 export const allProfile = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'))

 const response = await axios.get(`${url}/profile`, {  mode: 'no-cors', config: {
  headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
}})

return response.data
 }



 export const followunfollow = async({id, toast, userId}) => {
const { token } = JSON.parse(localStorage.getItem('user'))
console.log(userId)

 const response = await axios.put(`${url}/user/follow/${id}`, {  mode: 'no-cors', config: {
   headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
 }} )
if(response){
  toast.success('updating')

}
 return response.data
 } 

 export const postComment = async({comments, id}) => {
  const { token } = JSON.parse(localStorage.getItem('user'))
 
   const response = await axios.post(`${url}/api/comment/${id}`, comments, {  mode: 'no-cors', config: {
     headers: { 'Access-Control-Allow-Origin': '*', 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
   }} )
   console.log({comments: response.data})
   return response.data
   } 