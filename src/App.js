import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1> Home page </h1>} />
          <Route path="/add" element={<h1> Add Product page </h1>} />
          <Route path="/update" element={<h1> Update Product page </h1>} />
          <Route path="/logout" element={<h1> Logout page </h1>} />
          <Route path="/profile" element={<h1> Profile page </h1>} />
          <Route path="/signup" element={<Signup />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
      <Footer />
    </div>
  );
}

export default App;
