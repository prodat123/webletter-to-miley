import { useEffect, useState } from "react";
import "./App.css";
import DesignGenerator from "./DesignGenerator";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero_Template from "./hero/Hero_Template";
import About_Template from "./about/About_Template";
import ConfettiEffect from "./ConfettiEffect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the duration for displaying confetti

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? ( // Render ConfettiEffect if still loading
        <ConfettiEffect duration={5000} />
      ) : (
        <DesignGenerator />
      )}
    </div>
  );
};

export default App;
