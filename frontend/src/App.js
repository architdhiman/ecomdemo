import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import { PrivateRoutes } from './routes/auth';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>}></Route>      
      <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="home/products" element={<Products />} />          
          <Route path='/cart' element={<Cart/>}></Route>      
      </Route>
    </Routes>
    </>
  );
}

export default App;
