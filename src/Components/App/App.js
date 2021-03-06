import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../../Pages/About/About';
import HomePage from '../../Pages/HomePage/HomePage';
import Events from '../../Pages/Events/Events';
import Disclaimer from '../../Pages/Disclaimer/Disclaimer';
import NotFound from '../../Pages/NotFound/NotFound';
import Services from '../../Pages/Services/services';
import configureStore from '../../Services/Store/configureStore';
import { Provider } from 'react-redux';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

function App() {
   const store = configureStore();
   return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/disclaimer" element={<Disclaimer />}/>
                    <Route path="/events" element={<Events />} />
                    <Route path="/services" element={<Services />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
        
    );
}

export default App;
