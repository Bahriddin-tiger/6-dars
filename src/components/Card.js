import styled from "styled-components"
import {Link} from "react-router-dom"
import "./Card.css"
export const Card = ({item}) => {
    return(
        <MovieCard>
         <Link className="link" to={`/movie/${item.id}`}>
         <MovieImg src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>  
          <MovieTitle>{item.title}</MovieTitle>
          <MovieText>{item.release_date}</MovieText>
         </Link>
        </MovieCard>

    )
}


const MovieCard=styled.li`
width:23%;
padding:10px;
border-radius:8px;
margin-bottom:10px;
margin-top:30px;
background-color:teal;
`
const MovieImg =styled.img`
width:100%;
object-fit:cover
`
const MovieTitle=styled.h3`
color:#fff;
font-size:24px;
`
const MovieText=styled.h3`
color:#fff;
font-size:18px;
`