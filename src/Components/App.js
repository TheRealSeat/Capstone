import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Product from "./product";
import Events from "../Pages/Events";
import NotFound from "../Pages/NotFound";
import { Provider } from "react-redux";
import configureStore from "../Store/configureStore";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
