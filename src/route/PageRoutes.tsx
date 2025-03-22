import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductIndex from '../pages/ProductIndex'
import BasketPage from '../pages/BasketPage'
import Success from '../pages/Success'

const PageRoutes = () => {
  return (
    <>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductIndex />} />
    <Route path="/basket" element={<BasketPage />} />
    <Route path="/success" element={<Success />} />

    </Routes>
    
    </>
  )
}

export default PageRoutes