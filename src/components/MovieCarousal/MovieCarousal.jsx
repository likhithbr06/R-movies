import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

const MovieCarousal = (props) => {
const settings={
  infinite: false,
  slidesToShow:5,
  swipeToSlide:true,
  speed:500,
  responsive:[{
    breakpoint:400,
    settings:{
      slidesToShow:3,
      slidesToScroll:1
    }
  }]
}

  return (
    <div className='carousal-content'>
        <Slider {...settings}>
            {
              props.data.map((item,i)=>{
                if(i<7){
                  return (
                    <div className='media-card'>
                        {props.type === "movie" ?
                        <Link to={{pathname:`/movie/${item.id}`, isTV:false,movie_name:`${props.movieName}`}}>
                            <img alt='poster' className='img-fluid' src={IMAGE_BASE_URL+POSTER_SIZE+ item.poster_path}/>
                        </Link>:
                        <Link></Link>}
                    </div>
                  )
                }
              })
            }
        </Slider>
    </div>
  )
}

export default MovieCarousal