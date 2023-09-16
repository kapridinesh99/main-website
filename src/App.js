import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import JoinUs from "./Pages/JoinUs";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import CompanyPlans from "./Pages/CompanyPlans";
import FuturePlans from "./Pages/FuturePlans";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import NF404 from "./Pages/404";
import Products from "./Pages/Products";
import User from "./Pages/User";
import Term from "./Pages/Terms";
import Privacy from "../src/Pages/Privacy";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/companyplans" element={<CompanyPlans />} />
          <Route path="/futureplans" element={<FuturePlans />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/404" element={<NF404 />} />
          <Route path="/term" element={<Term />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
