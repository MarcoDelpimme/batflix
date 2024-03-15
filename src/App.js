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
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <HeroSection />

      <div>
        <FilmRow1 />
      </div>
      <div>
        <FilmRow2 />
      </div>
      <div>
        <FilmRow3 />
      </div>
      <div>
        <EditProfile />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
