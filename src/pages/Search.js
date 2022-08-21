import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { Card } from "../components/Card";
import { PaginationMovies } from "../components/Pagination";
import useDebounce from "../Hooks/useDebounce";


 export const Search = () => {
    const {searchQuery}=useParams();
  const debouncedValue = useDebounce(searchQuery, 500)
    const [movie ,setMovia] =useState({
        isLoading:true,
        isError: false,
        data:{},
        totalPage:0,
    })
    const [activePage,setActivePage] = useState(1);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie',{
            params:{
                api_key:'2cae5cacdaee463b3dd41920da0e513d',
                page:activePage,
                query:debouncedValue,
            }
        })
        .then((res)=>setMovia({
            isLoading:true,
            isError: false,
            data:res.data.results,
            totalPage:res.data.total_pages,
    }))
        .catch((err)=>setMovia({
            ...movie,
            isLoading:false,
            isError: true,
           
    }))
        
    },[debouncedValue,activePage]) 
    return(
        <>
        <h1>search {searchQuery}</h1>
        <div>
            {movie.data.length && <List>
                {movie.data.map((e)=>(
                    <Card key={e.id} item={e} />
                ))}
                </List>}
                <PaginationMovies total={movie.totalPage} setActivePage={setActivePage} />
        </div>
        </>
    )
 }

 const List=styled.ul`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin:0;
padding:0;
list-style:none
`