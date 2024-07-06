import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Bank from './Components/Bank';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Portfolio/>} />
          <Route path="/bank" element={< Bank/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
