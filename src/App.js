import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer.jsx";
import FilmRow1 from "./Component/FilmsRow1";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmRow2 from "./Component/FilmsRow2";
import FilmRow3 from "./Component/FilmsRow3";
import HeroSection from "./Component/Hero.jsx";
import EditProfile from "./Component/EditProfile";
import Account from "./Component/Account";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TvShows from "./Component/TvShows";
import MovieDetails from "./Component/MovieDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <div>
                <HeroSection />
              </div> */}
              <div>
                <FilmRow1 />
              </div>
              <div>
                <FilmRow2 />
              </div>
              <div>
                <FilmRow3 />
              </div>
            </div>
          }
        />

        <Route
          path="/hero"
          element={
            <div>
              <HeroSection />
            </div>
          }
        />
        <Route
          path="/editProfile"
          element={
            <div>
              <EditProfile />
            </div>
          }
        />
        <Route
          path="/accountProfile"
          element={
            <div>
              <Account />
            </div>
          }
        />

        <Route path="/MovieDetails/:filmId" element={<MovieDetails />} />

        <Route
          path="/tvShows"
          element={
            <div>
              {" "}
              <TvShows />
            </div>
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
