import React, { useState, useEffect } from "react";
import "./style.css";

const lightColors = ["red", "green", "yellow"];

const TrafficLight = () => {
  const [durations, setDurations] = useState({
    red: 10000,
    green: 15000,
    yellow: 5000,
  });

  const [selectedStart, setSelectedStart] = useState("red");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [running, setRunning] = useState(false);

  const getCurrentLight = () => lightColors[currentIndex];
  const getDuration = (color) => durations[color];

  useEffect(() => {
    if (!running) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lightColors.length);
    }, getDuration(getCurrentLight()));

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, durations, running]);

  const handleDurationChange = (color, value) => {
    setDurations((prev) => ({
      ...prev,
      [color]: Number(value) * 1000,
    }));
  };

  const handleStart = () => {
    const index = lightColors.indexOf(selectedStart);
    setCurrentIndex(index);
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Traffic Light Controller</h2>

      {/* Controls */}
      <div className="control-panel">
        <div>
          <label>Start With:</label>
          {lightColors.map((color) => (
            <label key={color} style={{ margin: "0 10px" }}>
              <input
                type="radio"
                value={color}
                checked={selectedStart === color}
                onChange={(e) => setSelectedStart(e.target.value)}
                disabled={running}
              />
              {color}
            </label>
          ))}
        </div>

        <div style={{ marginTop: "10px" }}>
          {lightColors.map((color) => (
            <div key={color} style={{ marginBottom: "5px" }}>
              <label>
                {color} duration (sec):{" "}
                <input
                  type="number"
                  value={durations[color] / 1000}
                  min="1"
                  disabled={running}
                  onChange={(e) => handleDurationChange(color, e.target.value)}
                />
              </label>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "10px" }}>
          <button
            onClick={handleStart}
            disabled={running}
            style={{ marginRight: "10px", padding: "5px 15px" }}
          >
            Start
          </button>

          <button
            onClick={handleStop}
            disabled={!running}
            style={{ padding: "5px 15px" }}
          >
            Stop
          </button>
        </div>
      </div>

      {/* Traffic Light */}
      <div className="traffic-light" style={{ marginTop: "30px" }}>
        <div
          className={`light red ${
            getCurrentLight() === "red" && running ? "on" : ""
          }`}
        ></div>
        <div
          className={`light yellow ${
            getCurrentLight() === "yellow" && running ? "on" : ""
          }`}
        ></div>
        <div
          className={`light green ${
            getCurrentLight() === "green" && running ? "on" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
