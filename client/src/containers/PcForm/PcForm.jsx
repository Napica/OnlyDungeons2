import React from "react";
import placeholderImg from "./placeholder200x200.jpg";
import { Link } from "react-router-dom"

function PcForm() {
  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
              <p>Tagline: </p>
              <div className="content-border">
                <input id="tagLine" type="text" className="validate" />
              </div>

              <p>Preferred Role: </p>
              <div className="content-border">
                <select className="browser-default">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="1">Bard</option>
                  <option value="2">Cleric</option>
                  <option value="3">Fighter</option>
                  <option value="4">Paladin</option>
                  <option value="5">Thief</option>
                  <option value="6">Wizard</option>
                </select>
              </div>
            </div>

            <div className="col s6">
              <div className="col s12">
                <p>Avatar:</p>
                <img
                  className="content-border col s12 image-true"
                  src={placeholderImg} alt = "placeholder"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>voyuerallowed</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
            {/* this is the end of the checkboxes */}
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Availability:</h5>
              <div className="row">
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Thursday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="row vertical-spacer-sm">
                <div className="col s4 "></div>
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s3" to = "/NewUser">
                  Cancel
                </Link>
                <div className="col s1 "></div>
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s3" to = "/DmDirectory">
                  Create Account
                </Link>
                <div className="col s1 "></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PcForm;