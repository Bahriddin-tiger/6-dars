import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"
import styled from 'styled-components';
export const Single = () => {
   const {id}=useParams();
   const [movie, setMovie] = useState({})
   useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
        params:{
            api_key:'2cae5cacdaee463b3dd41920da0e513d',
        }
    })
    .then(function (response) {
       setMovie(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
   },[id])
    return (
   
       <Box>
       {movie &&  (<Bos className='w-25' >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
       <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
    </Bos>)}
       </Box>
  
    )
}

const Box = styled.div`
width:100%

display:flex;
align-items: center;
text-align:center;
justify-content:space-between;
background-color:pink;
`
const Bos = styled.div`
text-align:center;
margin: 0 auto;
`