import './App.css';
import Navbar from './project/Navbar';
import Footer from './project/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './project/Home';
import About from './project/About';
import Academics from './project/Academics';
import Activities from './project/Activities';
import Contact from './project/Contact';
import ImageSlider from './project/ImageSlider';
import ImageSwapper from './project/ImageSwapper';
import HolisticSection from './project/HolisticSection';
import ContactPage from './project/Contact';
import Faculty from  './project/Faculty';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/imageswaper" element={<ImageSwapper />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/facultypage" element={<Faculty />} />
         <Route path="/holisticsection" element={<HolisticSection/>} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
