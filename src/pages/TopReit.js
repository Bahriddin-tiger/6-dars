import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "../components/Card"
import styled from "styled-components"
import Pagination from '@mui/material/Pagination';

export const TopReit = () => {
    const [films, setFilms] =useState({
        isLoading:true,
        isError:false,
        data:{},
        totalPage:0,
    })
    const [activePage, setActivePage] =useState(1) 
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated',{
            params:{
                api_key:'2cae5cacdaee463b3dd41920da0e513d',
                page:activePage,
            }
        })
        .then(function (response) {
            setFilms({
                isLoading:true,
                isError:false,
                data:response.data.results,
                totalPage:response.data.total_pages,
            });
        })
        .catch(function (error) {
            setFilms({
                ...films,
                isLoading:false,
                isError:true,
            })
        })
    },[activePage])
    return(
        <>
        {films.data.length && (
            <List>
                {films.data.map((e,index)=>(
                    <Card key={index} item={e}/>
                ))}
            </List>
        )}
         <Row>
         <Pagination onClick={(evt)=>setActivePage(evt.target.innerText)} count={films.totalPage > 500 ? 500 : films.totalPage  } variant='outlined' shape="rounded" />
         </Row>
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
const Row=styled.div`
display:flex;
justify-content:center;
padding:50px 0;
`