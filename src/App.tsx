import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
