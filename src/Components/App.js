import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Product from './product';
import Events from '../Pages/Events';
import NotFound from '../Pages/NotFound';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/events" element={<Events />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;