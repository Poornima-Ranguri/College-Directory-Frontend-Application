import { Component } from "react";
// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
import "./index.css";

class Home extends Component {
  render() {
    //const jwtToken = Cookies.get("jwt_token");
  /*  if (jwtToken === undefined) {
      return <Navigate to="/login" />;
    }*/
    return (
      <div className="app-container">
        <h1 className="heading">College Directory Application</h1>
      </div>
    );
  }
}

export default Home;
