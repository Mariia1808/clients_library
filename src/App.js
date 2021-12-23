import Footer from './components/Footer';
import {observer} from "mobx-react-lite";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} =useContext(Context)
    const [loading, setLoading] =useState(true)
    useEffect(()=>{
            check().then(data =>{
                user.setUser(data)
                user.setIsAuth(true)
            }).finally(()=> setLoading(false))
    }, [])
    
    if(loading)
    {
        return <Spinner animation={"grow"}/>
    }
    return (
      <BrowserRouter>
          <div>
          <NavBar/>
          <AppRouter />
          <Footer/> 
          </div>
      </BrowserRouter>
    );
});

export default App;
