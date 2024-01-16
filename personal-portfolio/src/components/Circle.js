import React from 'react';
import './Circle.css';

function Circle() {
  return (
    <div className='skill'>
        <div className='outer'>
            <div className='inner'>
                <div id='number'>
                    65%
                </div>
            </div>
        </div>
        <svg className='circle-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle className='svg-circle' cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg> 
    </div>
  )
}

export default Circle