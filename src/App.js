import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import ScriptPak from "./Pages/ScriptPak";
import ContactPage from "./Pages/Contact";
import FAQPage from "./Pages/FAQ";
import ScriptInjectHome from "./Pages/ScriptInject";
import ScriptWebPage from "./Pages/ScriptWeb";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/TermsAndCondition";

import "./index.css";
import "./Assets/CSS/typography.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout component that conditionally shows header/footer
const Layout = ({ children }) => {
  const location = useLocation();
  // Add all paths where header/footer should be hidden
  const hideHeaderFooter = ["/login"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scriptpak" element={<ScriptPak />} />
          <Route path="/scriptweb" element={<ScriptWebPage />} />
          <Route path="/scriptinject" element={<ScriptInjectHome />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-terms-of-service" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
