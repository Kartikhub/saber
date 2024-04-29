import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editing } from './screens/Editing';
import { Routing } from './screens/Routing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editing />} />
        <Route path="/route" element={<Routing />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
