import {
    BrowserRouter, Routes, Route
  } from 'react-router-dom'
  
  
  import { HomePage } from '../Pages/HomePage/HomePage';
  import { DetailsPage } from '../Pages/DetailsPage.js/DetailsPage';   


export const Router = () =>{
    return (
        <div>
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
    </BrowserRouter>
        </div>
    )
}