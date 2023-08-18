import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/Navbar";
import JobPage from "../pages/JobPage";
import AboutPage from "../pages/AboutPage";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
