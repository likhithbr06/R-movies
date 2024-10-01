import React from 'react'
import { Link } from 'react-router-dom'
import   './header.scss'

const Header = () => {
  return (
    <div id='navbar' className='rmdb-header w-full h-[100px]'>
        <div className='rmdb-header-content max-w-[1280px] h-auto '>
            <Link to='/'>
            <img className="rmdb-logo" src="./images/r_movies.png" alt="the logo" />
            </Link>
            <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo"/>
        </div>
    </div>
  )
}

export default Header