import React from 'react'
import { useSelector } from 'react-redux'
import Followers from './Followers'

const Mapfollower = () => {
    const { followers } = useSelector((state) => state.user)
    return (
        <>
           {followers.followers && followers.followers.map((follower) => (
               <Followers key={follower._id} follower={follower} />
               ) )}
        </>
    )
}

export default Mapfollower
