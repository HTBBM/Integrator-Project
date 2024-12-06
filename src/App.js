import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import NavBar from "./components/NavBar";
import Container from "./components/layout/Container";
import DashBoard from "./components/pages/DashBoard";
import Eletro2 from "./components/pages/Eletro2";
import PrivateRoutes from "./components/utils/PrivateRoute";
import { AuthProvider } from "./components/utils/AuthContext";
import Timer from "./components/pages/Timer";

export default function App() {
  return (
    <AuthProvider>
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
              <Route element={<Timer />} path="/timer"></Route>
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Login />} path="*" />

          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}
