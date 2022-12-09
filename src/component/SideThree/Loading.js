import React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loading = () => {
  return (
    <div style={{width: `calc(100vw / 2)`, height: `calc(100vh / 2)`}}>
        <div>Loading...</div>
        <CircularProgress />
    </div>
  )
}

export default Loading
