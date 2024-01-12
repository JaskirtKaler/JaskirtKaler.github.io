import React from 'react'
import './Home.css'
import VideoCover from 'react-video-cover';
import vid from '../images/homeBackground.mp4';
function Home() {
  return (
    <section className='home' id='home'>
      <VideoCover
        videoOptions={{
          src: vid,
          autoPlay: true,
          muted: true,
          loop: true,
        }}
        remeasureOnWindowResize
      />
        <div className='home-content'>Home</div> 
    </section>
  )
}

export default Home