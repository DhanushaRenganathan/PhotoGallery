
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Introduction from './Introduction';
import PhotoGallery from './PhotoGallery';

function App() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={ <Introduction /> } />
          <Route path="/gallery" element={ <PhotoGallery /> } />

        </Routes>

    
    </BrowserRouter>
  );
}

export default App;
