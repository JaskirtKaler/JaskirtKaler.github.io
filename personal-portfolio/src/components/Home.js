import React from 'react'
import './Home.css'
import VideoCover from 'react-video-cover';
import vid from '../images/homeBackground.mp4';
import Circle from './Circle.js'
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
        <div className='home-content'>
          <div className='home-info'>
            <div className='home-title'>
              <h1>Jaskirt Kaler</h1>  
              <div className='home-contacts'>contancts go here</div>
            </div>
            <Circle />
          </div>
        </div> 
    </section>
  )
}

export default Home