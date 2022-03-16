import Footer from "components/Footer";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import "style.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
