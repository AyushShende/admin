import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<UserList />} path="/users" />
          <Route element={<User />} path="/user/:userId" />
          <Route element={<NewUser />} path="/newUser" />
          <Route element={<ProductList />} path="/products" />
          <Route element={<Product />} path="/product/:productId" />
          <Route element={<NewProduct />} path="/newProduct" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
