import { Login } from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { useAuth } from "./Hooks/useAuth";
import { Private } from "./Private";

 

function App() {
  const {token}= useAuth();
 if(token){
  return(
    <Private/>
  )
 }
 return(
  <Login/>
 )
}

export default App;
