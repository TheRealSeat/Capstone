import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Product from '../../Pages/Product/Product';
import Events from '../../Pages/Events/Events';
import NotFound from '../../Pages/NotFound/NotFound';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/product" element={<Product />} />
                <Route path="/events" element={<Events />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;