import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NavBar from "./components/NavBar";
import Container from "./components/layout/Container";
import DashBoard from "./components/pages/DashBoard";
import Footer from "./components/layout/Footer";
import Eletro2 from "./components/pages/Eletro2";
import PrivateRoutes from "./components/utils/PrivateRoute";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Container customClass=".min-height">
        <Routes>
          {/* <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/eletro2" element={<Eletro2 exact />} />
          <Route path="/dashboard" element={<DashBoard exact />} /> */}

          <Route element={<PrivateRoutes />}>
            <Route element={<DashBoard />} path="/dashboard" />
            <Route element={<Eletro2 />} path="/dashboard/eletro2" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Home />} path="/" />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
