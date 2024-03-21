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
import { Action } from "./Pages/Action";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { HomeNumberWrapper } from "./Pages/HomeWrap/HomeNumberWrapper";
import { CartValues } from "./Pages/CartValues";
import { Search } from "./Pages/search/Search";
import { SinglePost } from "./Pages/Post/SinglePost";
import { SingleProject } from "./Pages/SingleProject";
import { About } from "./Pages/About/About";
import { JobApplicationForm } from "./Pages/JobForm/JobApplicationForm";

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
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Action" element={<Action />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/HomeNumberWrapper" element={<HomeNumberWrapper />} />
        <Route path="/CartValues" element={<CartValues />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/SinglePost" element={<SinglePost />} />
        <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
        <Route path="/SingleProject" element={<SingleProject />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
