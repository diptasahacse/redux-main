import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Layouts from "./Layouts/Layouts";
import TopRated from "./pages/TopRated";

function App() {
  return (
   <BrowserRouter>
        <main>
          <Layouts>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layouts>
        </main>
      </BrowserRouter>
  );
}

export default App;
