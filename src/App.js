import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Portfolio/>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
