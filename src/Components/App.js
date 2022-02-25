import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Product from './product';
import Events from '../Pages/Events';
import NotFound from '../Pages/NotFound';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/events" element={<Events />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;