import React from 'react'
import './MovieCart.css'
const MovieCart = ({title, year, poster}) => {
  return (
    <div className='cart'>
            <img className="img" src={poster} alt="img" />
            <div className='title'>Title : {title}</div>
            <div className='year'>Year : {year}</div>
    </div>
  )
}
export default MovieCart