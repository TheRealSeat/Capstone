import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Product from '../../Pages/Product/Product';
import Events from '../../Pages/Events/Events';
import NotFound from '../../Pages/NotFound/NotFound';
import configureStore from '../../Services/Store/configureStore';
import { Provider } from 'react-redux';


function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/product" element={<Product />} />
                <Route path="/events" element={<Events />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </Provider>
        
    );
}

export default App;