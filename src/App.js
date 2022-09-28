import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routess from "./config/Routess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes
        render={(props) => (
          <>
            <Header {...props} />
            <Routess />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
