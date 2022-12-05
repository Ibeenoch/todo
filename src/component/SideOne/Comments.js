import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Comments = ({post, times}) => {
    const { user } = useSelector((state) => state.user)
    const ji = times


    return (
             <div style={{display: 'flex'}}>
             <img src={user.user.profilepics.url} style={{width: '30px', height: '30px', borderRadius: '50%',  padding: '0.7rem'}} />
             <div style={{width: '50%', height: 'max-content', background:'gray', color: 'white', fontSize: '1rem', borderRadius: '1rem', padding: '0.7rem', margin: '0.7rem'}}>
                 <p style={{fontSize: '14px'}} >{post.comment} </p>
           <p style={{fontSize: '10px'}}><small>{moment(ji).fromNow()}</small></p>
            </div>
          </div>
    )
}

export default Comments
