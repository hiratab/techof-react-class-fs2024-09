import { useState } from "react";

function Exercise7() {
  const [currentWeather, setCurrentWeather] = useState('sunny');

  return (
    <div>
      <p>Choose the current weather:</p>
      <select
        value={currentWeather}
        onChange={(event) => {
          setCurrentWeather(event.target.value);
        }}
      >
        <option value="sunny">Sunny</option>
        <option value="raining">Raining</option>
        <option value="snowing">Snowing</option>
      </select>
      <p>{currentWeather}</p>
      {currentWeather === "sunny" && <p>It's sunny outside!</p>}
      {currentWeather === "raining" && <p>Bring an umbrella, it's raining!</p>}
      {currentWeather === "snowing" && <p>It's snowing outside! Bundle up!</p>}
    </div>
  )
}

export default Exercise7;