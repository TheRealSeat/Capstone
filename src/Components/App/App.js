import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Events from '../../Pages/Events/Events';
import NotFound from '../../Pages/NotFound/NotFound';
import configureStore from '../../Services/Store/configureStore';
import { Provider } from 'react-redux';
import Footer from "../../Components/Footer/Footer";
import Navbar from '../../Components/Navbar/Navbar';

function App() {
    const store = configureStore();

    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/events" element={<Events />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
        
    );
}

export default App;