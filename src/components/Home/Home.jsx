import React, { useEffect,useState } from 'react'
import {API_URL,API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE} from '../../config';
import './home.scss'
import { fetchAllMovies, fetchAllShows } from '../../services/movieService'
import HeroImage from '../Heroimage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import MovieCarousal from '../MovieCarousal/MovieCarousal';


const Home = () => {
  const [allData, setallData] = useState({
    allMovies:[],
    alltvShows:[],
   // totalPages:0,
    //currentPage:0,
    searchTerm:'',
    heroImage:null
  })
  const [allMovies, setallMovies] = useState()
  const [allTvShows, setallTvShows] = useState()

  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const tv_endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const getMovies=()=>{
    fetchAllMovies(endpoint).then((res)=>{
      //setallMovies(res.data)
      setallData((prevData)=>({
        ...prevData,
        allMovies: res.data.results,
        heroImage: res.data.results[0]
      }))
    })
  }
  const getTvShows=()=>{
    fetchAllMovies(tv_endpoint).then((res)=>{
      //setallMovies(res.data)
      setallData((prevData)=>({
        ...prevData,
        alltvShows: res.data.results,
      }))
    })
  }
    useEffect(()=>{
      getMovies()
      getTvShows()
      console.log(allData)
      
    },[])
  
  return (
    <div className='rmdb-home'>
        {allData.heroImage ? (<div>
          {
            window.innerWidth <400 ?
            (<HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${allData.heroImage.poster_path}`}
                title={allData.heroImage.original_title}
                description={allData.heroImage.overview}/>) : 
            (<HeroImage 
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${allData.heroImage.backdrop_path}`}
              title={allData.heroImage.original_title}
              description={allData.heroImage.overview}/>)
          }
          <SearchBar/>
        </div>): null}
        <div className='carousal-section'>
            <div className=''>
                  <MovieCarousal data={allData.allMovies} type="movie"/>
                  <MovieCarousal data={allData.alltvShows} type="tv"/>
            </div>
        </div>
    </div>
  )
}

export default Home