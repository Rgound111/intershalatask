import './App.css';
// import About from './components/About';
import Home from './components/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Instructor from './components/Instructor';

function App() {

  return (
    <>
      {/* <BrowserRouter> */}
        <Home />
        {/* <Routes>
          <Route path='/about' exact element={<About/>} />
          <Route path='/instructor' element={<Instructor/>} />
          <Route path='/reviews' element={<Reviews/>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
