import React, { useState, useEffect, useStateWithCallbackLazy } from "react";

import "./stylethank.css";

const Thankyou = (props) => {
  const raw = props.location.params;
  const lat = props.location.lat;
  const lon = props.location.lon;

  let data = {};
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lon);
  const [user_en, setUserEN] = useState(raw);

  async function Position() {
    const timestamp = new Date();

    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      if (typeof latitude != "undefined" && typeof longitude != "undefined") {
        data = { latitude, longitude, user_en, timestamp };
        console.log(data);
      }
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    if (data) {
      const response = await fetch(
        "https://covid-tracing-firebase-r9f7z.ondigitalocean.app/api/covid-tracing",
        options
      );

      response.json();
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every 10 minutes!");
      Position();
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div id="con" className="con">
        <div className="tain">
          <h1 className="ner">
            Thank You,
            <br /> {user_en}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
