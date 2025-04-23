import React, { useRef, useState } from "react";

const Api_key = "5e758021ae0beee4e4471b1dbce6aaea";

const WeatherWidget = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.cod === 404 || data.cod === 400) {
        setShowWeather([
          {
            type: "Not Found",
            img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
          },
        ]);
      } else {
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        setApiData(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-red-500 to-yellow-400 w-60 p-0 rounded-sm">
      <div className="flex items-center justify-between pr-12 bg-white border border-none">
        <input
          type="text"
          ref={inputRef}
          placeholder="Ente Location"
          className="text-sm border-none p-0 border-red-200 font-semibold uppercase flex-1"
        />
        <button onClick={fetchWeather}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
            alt="Search"
            className="w-3"
          />
        </button>
      </div>
      <div
        className={`duration-300 delay-75 overflow-hidden ${
          showWeather ? "h-auto" : "h-0"
        }`}
      >
        {loading ? (
          <div className="grid place-items-center h-44">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
              alt="Loading"
              className="w-14 mx-auto mb-2 animate-spin"
            />
          </div>
        ) : (
          showWeather && (
            <div className="text-center flex flex-col gap-2 mt-2">
              {apiData && (
                <p className="text-xl font-semibold">
                  {apiData.name}, {apiData.sys.country}
                </p>
              )}
              <img
                src={showWeather[0]?.img}
                alt={showWeather[0]?.type}
                className="w-28 mx-auto"
              />
              <h3 className="text-2xl font-bold text-zinc-800">
                {showWeather[0]?.type}
              </h3>
              {apiData && (
                <div className="flex justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                    alt="Temperature"
                    className="h-8 mt-1"
                  />
                  <h2 className="text-4xl font-extrabold">
                    {apiData.main.temp}&#176;C
                  </h2>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
