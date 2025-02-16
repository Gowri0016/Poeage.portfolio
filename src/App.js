import './Css/App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Details from './Component/Details';
import Home from './Component/Home';
import Contact from './Component/Contact';
import SplashCursor from './Component/Splashcursor';
import Intro from './Component/Intro';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Routes>
        <Route path="/Details" element={<Details/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <SplashCursor/>
    <Footer/>
    </div>
  );
}

export default App;
