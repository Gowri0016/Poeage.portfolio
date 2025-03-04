import './Css/App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Details from './Component/Details';
import Contact from './Component/Contact';
// import SplashCursor from './Component/Splashcursor';
import Intro from './Component/Intro';
import Servises from './Component/Servises';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Details" element={<Details/>}></Route>
        <Route path="/Servises" element={<Servises/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      {/* <SplashCursor/> */}
    <Footer/>
    </div>
  );
}

export default App;
