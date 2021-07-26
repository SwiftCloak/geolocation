import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesub.css";

export default function Submission() {
  const [user_en, setUserEN] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleSubmit = (data) => {
    console.log(user_en);
    getPosition();
    data.preventDefault();
  };

  const getPosition = navigator.geolocation.getCurrentPosition(function (
    position
  ) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const passingParam = {
    pathname: "/thankyou",
    params: user_en,
    lat: latitude,
    lon: longitude,
  };

  return (
    <div id="page-container" className="page-container">
      <div className="form-container">
        <h1 className="form-header">GPS :D</h1>
        <h5 className="paragraph">
          To keep connected with us please fill in your Employee Number
        </h5>
        <form onSubmit={handleSubmit}>
          <input
            id={"user_en"}
            type={"text"}
            value={user_en}
            onChange={(data) => setUserEN(data.target.value)}
            placeholder={"Enter User EN"}
          />
          <Link to={passingParam}>
            <input type="submit" value="submit" />
          </Link>
        </form>
      </div>
    </div>
  );
}
