import './App.css';

//Routes
import { Routes, Route } from 'react-router-dom';

//react-slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//pages
import HomePage from './pages/Home.page'
import Moviepage from './pages/Movie.page';
import Playpage from './pages/Play.page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<Moviepage/>} />
        <Route path='/plays' element={<Playpage/>} />
      </Routes>
    </>
  );
}

export default App;
