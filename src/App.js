import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeBlogs from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/notfound/notfound";
import BlogItemDetails from "./components/blogdetailsitem";

const App = () => {
  return (
    <>
      <div className="routing-bg-container">
        <div className="routing-main-container">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeBlogs />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blogs/:id" element={<BlogItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
