import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import { useRef } from 'react'

function App() {
  const playerRef = useRef(null);
  const videoLink =  "http://localhost:8000/uploads/movies/f81191c8-0fa3-4aff-8352-ca4505c6ce3e/index.m3u8"

  const videoPlayerOption = {
    controls : true,
    responsive : true,
    fliud : true,
    sources : {
      src : videoLink,
      trpe : "application/x-mpegURL"
    }
  }

  const handlePlayerReady = (player)=>{
    playerRef.current = player;

    player.on("waiting", ()=>{
      videojs.log("Player is waiting")
    })

    player.on("dispose", ()=>{
      videojs.log("Player will disposed")
    })
  }
 

  return (
    <>
      <div>
        <VideoPlayer 
        options = {videoPlayerOption}
        onReady = {handlePlayerReady}/>
      </div>
    </>
  )
}

export default App
