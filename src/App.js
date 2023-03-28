import "./App.css";
import "./Signup.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
import Product from "./Components/Product";
import Product_List from "./Components/Product_List";
import UpdateProduct from "./Components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Product_List />} />{" "}
            <Route path="/addProduct" element={<Product />} />{" "}
            <Route path="/update/:id" element={<UpdateProduct />} />{" "}
            <Route path="/logout" element={<h1> Logout page </h1>} />
            <Route path="/profile" element={<h1> Profile page </h1>} />
          </Route>{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
      <Footer />
    </div>
  );
}

export default App;
