import { useEffect } from "react"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
export const Header = () =>{
  const [inputVal, setInputVal]= useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    if(inputVal.trim().length){
navigate('/search/'+inputVal)
    }else{
      navigate('/')
    }
  },[inputVal])
return(
<>
<Head>
  <Link className="btn text-white me-3 btn-link " to='/' >Home</Link>
  <Link className="btn  btn-link   text-white" to='/popular' >Popular</Link>
  <Link className="btn  btn-link   text-white" to='/topReit' >TopReit</Link>
  <Link className="btn  btn-link   text-white" to='/search' >Search</Link>
  <Link className="btn  btn-link   text-white" to='/movie:id' >Single</Link>
  <input onKeyUp={((evt)=>setInputVal(evt.target.value))} type="text" className="form-control w-25 ms-auto" placeholder="search..." />
</Head>

</>
)
}

 const Head = styled.header`
  display:flex;
  padding:1rem;
  background-color:#444;

 `
