import React from 'react'
import { useSelector } from 'react-redux'
import Following from './Following'

const MapFollowing = () => {
    const { following } = useSelector((state) => state.user)
    return (
        <>
           { following.map((followings) => (
               <Following key={followings._id} followings={followings} />
           ))}
        </>
    )
}

export default MapFollowing
