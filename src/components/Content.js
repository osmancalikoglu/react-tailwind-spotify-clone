import { Route, Routes } from "react-router-dom";
import Collection from "views/Collection";
import Home from "views/Home";
import Search from "views/Search";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <main className="flex-auto overflow-y-auto">
      <Navbar />
      <div className="px-8 pt-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
