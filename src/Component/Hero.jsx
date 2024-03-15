import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Container className="text-white">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="button"
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#2">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#3">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#4">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
