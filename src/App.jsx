import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
// import Home from "./pages/home/Home";
// import PageNotFound from "./pages/error/pageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <LoadingBar color="#08b4e3" height={3} progress={"NAN"} onLoaderFinished={"NAN"} />
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/error" element={<PageNotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
