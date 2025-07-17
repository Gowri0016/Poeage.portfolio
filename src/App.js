import './Css/App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
// import SplashCursor from './Component/Splashcursor';
import Intro from './Component/Intro';
import Notfound from './Component/Notfound';
import Service from './Component/Service';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      {/* <SplashCursor/> */}
    <Footer/>
    </div>
  );
}

export default App;
