import { Header } from "./components/Header"
import {Route,Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import {Popular} from "./pages/Popular"
import { Single } from "./components/single"
import { TopReit } from "./pages/TopReit"
import { Search } from "./pages/Search"


export const Private = () =>{
    return(
        <>
        
   
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/popular' element={<Popular/>} />
            <Route path='/topReit' element={<TopReit/>} />
            <Route path='/search/:searchQuery' element={<Search/>} />
            <Route path='/movie/:id' element={<Single/>} />
        </Routes>
        </>
    )
}