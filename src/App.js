import { Container } from "@mui/material";

import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
import './App.css';
import Header from "./components/Header/header";
import SimpleBottomNavigation from './components/MainNav/MainNav';
import Trending from   './pages/Trending/Trending';
import Search from   './pages/Search/Search';
import Series from   './pages/Series/Series';
import Movies from   './pages/Movies/Movies';
  

function App() {
  return (
     <Router>
     <Header />
     <div className="app">
      <Container>  
       <Routes>
        <Route path='/' exact element={<Trending/>}  />
        <Route path='/search' element={<Search/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/series' element={<Series/>} />
       </Routes>
      </Container>      
     </div>
     <SimpleBottomNavigation />
     </Router>
     
  );
}

export default App;