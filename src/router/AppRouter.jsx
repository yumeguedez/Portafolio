import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ColorSchemesExample from "../components/NavBar";
import JobPage from "../pages/JobPage";
import AboutPage from "../pages/AboutPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <Router>
        <ColorSchemesExample />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
