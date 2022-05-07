import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Checkout from './components/pages/Checkout/Checkout';
import Error from './components/pages/Error/Error';
import { Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Blog from './components/pages/Blog/Blog';
import RequireAuth from './components/shared/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>

        <Route path="/checkout" element={
          <RequireAuth>
              <Checkout />
          </RequireAuth>
        }></Route>
        
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
