// src/App.js
import { CartProvider } from './contexts/CartContext'; // Import CartProvider
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Instructionscreen from './pages/instruction-screen';
import Productbag from './pages/product-bag';
import Productbsock from './pages/sock-collection';
import TshirtCollection from './pages/tshirt-collection';
import HeadphoneCollection from './pages/headphone-collection';
import Trackingtags from './pages/tracking-tags';
import BagCollection from './pages/bag-collection';
import Checkout from './pages/checkout';
import LoadingScreen from './components/loadingscreen/Loadingscreen';
import Signinloadinscreen from './components/loadingscreen/Signin-loadingscreen';
import Productbag2 from './pages/product-bag2';

function App() {
    return (
        <CartProvider> 
            <Router>
                <HeaderWrapper />
                <Routes>
                    <Route path="/" element={<LoadingScreen />} />
                    <Route path="/sign-in" element={<Signinloadinscreen />} />
                    <Route path="/instruction" element={<Instructionscreen />} />
                    <Route path="/product/497820832229" element={<Productbag />} />
                    <Route path="/product/879521107158" element={<Productbsock />} />
                    <Route path="/product/1589201250" element={<TshirtCollection />} />
                    <Route path="/product/92012115850" element={<HeadphoneCollection />} />
                    <Route path="/product/5095812012" element={<Trackingtags />} />
                    <Route path="/product/108795211015" element={<BagCollection />} />
                    <Route path="/product/1212805094" element={<Productbag2 />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

const HeaderWrapper = () => {
    const location = useLocation();
    const isthisloading = location.pathname === '/';
    const isthishomepage = location.pathname === '/home';
    const issigninpage = location.pathname === '/sign-in';
    return isthisloading ? null : isthishomepage ? null : issigninpage ? null : <Header />;
};

export default App;