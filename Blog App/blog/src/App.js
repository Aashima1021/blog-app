import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Detail from './components/Detail';
import Addblog from './Addblog';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Posts/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
    <Route path="/addblog" element={<Addblog/>}/>

      
      
    </Routes>
    <Footer/>
    </BrowserRouter>

    
    </>
  );
}

export default App;
