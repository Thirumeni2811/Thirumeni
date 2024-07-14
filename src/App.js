import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Bank from './Components/Bank';
import Ploughing from './Components/Ploughing';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Portfolio/>} />
          <Route path="/bank" element={< Bank/>} />
          <Route path='/plough' element={<Ploughing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
