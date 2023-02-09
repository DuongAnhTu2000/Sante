import Home from './page/Home/Home';
import Shop from './page/Shop/Shop';
import Cart from './page/Cart/Cart';
import ProductDetail from './page/ProductDetail/ProductDetail';
import Admin from './page/Admin/Admin';
import ProductList from './page/Admin/ProductList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import ProtectedRoute from './Utils/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="detail" element={<ProductDetail />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<ProductList />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;