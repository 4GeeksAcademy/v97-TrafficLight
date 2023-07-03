import React, { useState } from "react";

import TrafficLight from "./TrafficLight.jsx";

let position = 0;
let intervalLights;
var lights = ["red", "yellow", "green"];

const Home = () => {
  const [activeColor, setActiveColor] = useState("");
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [styleContainer, setStyleContainer] = useState("container");

  function AddingLight() {
    setMostrarComponente(!mostrarComponente);

    if (mostrarComponente) {
      setStyleContainer("container");
      lights.pop();
      console.log(styleContainer);
      // console.log(ligth);
    } else {
      setStyleContainer("newContainer");
      lights.push("blue");
      // console.log(ligth);
      console.log(styleContainer);
    }
  }
  function changeColors() {
    console.log(position);

    if (position <= lights.length - 1) {
      setActiveColor(lights[position]);
      position++;
    }
    if (position === lights.length) {
      position = 0;
    }
  }

  function automaticLights() {
    intervalLights = setInterval(changeColors, 1000);
    changeColors();
  }

  function stopLights() {
    clearInterval(intervalLights);
    setActiveColor("");
    position = 0;
  }

  return (
    <>
      <div className="top"></div>
      <div className={styleContainer}>
        <div onClick={() => setActiveColor(lights[0])}>
          <TrafficLight activeColor={activeColor} trafficLightColor="red" />
        </div>

        <div onClick={() => setActiveColor(lights[1])}>
          <TrafficLight activeColor={activeColor} trafficLightColor="yellow" />
        </div>
        <div onClick={() => setActiveColor("green")}>
          <TrafficLight activeColor={activeColor} trafficLightColor="green" />
        </div>

        <div className={mostrarComponente ? null : "show-element"}>
          {mostrarComponente && (
            <div id="newColor">
              <div onClick={() => setActiveColor("blue")}>
                <TrafficLight
                  activeColor={activeColor}
                  trafficLightColor="blue"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="buttons  col-3 f-d-grid gap-2">
        <button
          onClick={() => automaticLights()}
          id="changeColors"
          type="button"
          className="btn btn-secondary"
        >
          Change colors
        </button>
        <button
          onClick={() => stopLights()}
          id="stopColors"
          type="button"
          className="btn btn-secondary"
        >
          Stop lights
        </button>
        <button
          onClick={() => AddingLight()}
          id="addLight"
          className="btn btn-secondary"
          type="button"
        >
          {mostrarComponente ? `Hidden lights` : `Add lights`}
        </button>
      </div>
    </>
  );
};

export default Home;
