import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Login />} />
          <Route />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
