import React from 'react';
import './Circle.css';

function Circle() {
  return (
    <div className='skill'>
            <svg className='circle-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="6" dy="6" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                        <feMerge> 
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <path className="circle"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#GradientColor)"
                    stroke-width="4"
                    stroke-dasharray="65, 100"
                    filter="url(#shadow)" />
                    <text x="50%" y="50%" text-anchor="middle" fill="#FFF" dy=".3em" font-size='10px'>65%</text>
            </svg>
        
    </div>
  )
}

export default Circle