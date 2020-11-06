import React from "react";
import { Link } from "react-router-dom"

function SigninPage() {
  return (
    <>
    <div className="container section">
      <div className="row section"></div>
      <div className="row section"></div>
      <div className="row section">
        <div className="col s6 content-border">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="col s12">
                <label for="username">
                    <p className="form-text">Username</p>
                  </label>
                  <input id="username" type="text" class="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <label for="password">
                    <p className="form-text">Password</p>
                  </label>
                  <input id="password" type="password" className="validate" />
                </div>
              </div>
              
              <div className="row">
                <div className="col s2"></div>
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s8" to = "/NewUser">
                  New Account
                </Link>
                <div className="col s2"></div>
              </div>

              <div className="row">
                <div className="col s2"></div>
              <Link button className="vertical-spacer-sm waves-effect waves-light btn col s8" to = "/DmDirectory">
                Login
              </Link>
              <div className="col s2"></div>
              </div>
            </form>
          </div>
        </div>

        <div className="col s6 content-border">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut fuga iusto voluptatum exercitationem quisquam accusantium porro. Delectus mollitia voluptates dolores praesentium pariatur quaerat quos consectetur iure. Autem, neque accusamus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos eaque quas illo. Enim in odit soluta quam voluptas dolorum quos animi porro totam, maxime inventore voluptatem necessitatibus suscipit. Nam.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SigninPage;
