import React from "react";

function EditProfile() {
  return (
    <div className="bg-dark mx-5">
      {/* <header className="position-sticky top-0" style={{ zIndex: 5 }}>
        <div className="container-fluid bg-dark">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="./index.html">
                <img src="./assets/netflix_logo.png" alt="" width="100px" />
              </a>
            </div>
          </nav>
        </div>
      </header> */}

      <div className="container-xs text-white mx-auto my-5" style={{ width: "60%" }}>
        <div className="border-bottom solid border-secondary">
          <h1>Edit Profile</h1>
        </div>
        <div className="row py-4">
          <div className="col-2">
            <div className="position-relative">
              <img src="kids_icon.png" alt="" width="100%" />
              <img src="./assets/icons8-edit.svg" alt="" id="imgrelative" />
            </div>
          </div>
          <div className="col-10">
            <div className="row pb-4 border-bottom solid border-secondary">
              <div className="col-12 mycustomtext2 mb-3">Strive Student</div>
              <div className="col-12 mycustomtext1">
                <h4>Language:</h4>
              </div>
              <div className="col-12">
                <button className="mybtn px-3">
                  <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </a>
                    <ul className="dropdown-menu mycolormenudrop">
                      <li>
                        <a className="dropdown-item" href="#">
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Spanish
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Polish
                        </a>
                      </li>
                    </ul>
                  </li>
                </button>
              </div>
            </div>
            <div className="row mb-4 border-bottom solid pt-4 pb-5 border-secondary">
              <div className="col-12 mycustomtext1">
                <h4>Maturity Settings:</h4>
              </div>
              <div className="col-6 mycustomtext3 text-center p-1 mb-2">ALL MATURITY RATINGS</div>
              <div className="col-6"></div>
              <div className="col-12">
                <p className="pb-2">Show titles of all maturity ratings for this profile</p>
              </div>
              <div className="col-12">
                <a href="" className="btnEditProfile">
                  EDIT
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="col-12 mycustomtext1">
                  <h4>Autoplay controls</h4>
                </div>
                <div className="form-check">
                  <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Autoplay next episode in a series on all devices
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Autoplay previews while browsing on all devices
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center border-top solid pt-4 pb-5 border-secondary">
          <div className="col-4">
            <div className="btnEditProfile">SAVE</div>
          </div>
          <div className="col-4">
            <div className="btnEditProfile">CANCEL</div>
          </div>
          <div className="col-4">
            <div className="btnEditProfile">DELETE PROFILE</div>
          </div>
        </div>
      </div>
      <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default EditProfile;
