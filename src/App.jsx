import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import Services from "./Components/Services";
import Solution from "./Components/Solution";
import Conversion from "./Components/Conversion";
import Portfolio from "./Components/Portfolio";
import Profil from "./Components/Profil";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { Action } from "./Components/Pages/Action";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";
import { ErrorPage } from "./Components/Pages/ErrorPage";
import { Port } from "./Components/Pages/Port";
import { Search } from "./Components/Pages/Search";
import { SinglePost } from "./Components/Pages/SinglePost";
import { SingleProject } from "./Components/Pages/SingleProject";
import { About } from "./Components/Pages/About";

const App = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Services />
              <Solution />
              <Conversion />
              <Portfolio />
              <Profil />
              <Footer />
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Action" element={<Action />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/Port" element={<Port />} />
        <Route path="/Search " element={<Search />} />
        <Route path="/SinglePost " element={<SinglePost />} />
        <Route path="/SingleProject" element={<SingleProject />} />
      </Routes>
    </div>
  );
};

export default App;
