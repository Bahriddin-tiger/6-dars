import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
export const PaginationMovies = ({total,setActivePage}) =>{
    return(
        <>
        <Row>
         <Pagination onClick={(evt)=>setActivePage(evt.target.innerText)} count={total > 500 ? 500 : total  } variant='outlined' shape="rounded" />
         </Row>
        </>
    )
}

const Row=styled.div`
display:flex;
justify-content:center;
padding:50px 0;
`