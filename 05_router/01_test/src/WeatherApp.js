import { useEffect, useState } from 'react';

function WeatherApp() {

  const API_KEY = 'e7056fa76f6a6b7d8be7d23179c66858';

  const [position, setPosition] = useState({});
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [wind, setWind] = useState({});

  // 위치를 가져오는 함수
  function getPosition() {

    return (
      new Promise((resolve, reject) => {
        // API 사용하기 위해, 위도와 경도 추출하기
        navigator.geolocation.getCurrentPosition((currentPosition) => {

          setPosition({
            longitude: currentPosition.coords.longitude,
            latitude: currentPosition.coords.latitude
          })

          resolve(currentPosition.coords);
        });
      })
    )
  }

  async function getWeather(currentPosition) {
    return (
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.latitude}&lon=${currentPosition.longitude}&appid=${API_KEY}`)
        .then(res => res.json())
    )
  }

  useEffect(() => {
    async function setWeatherState() {
      const currentPosition = await getPosition();
      const result = await getWeather(currentPosition)
      console.log(result)
      setCity(result.name)
      setWeather(result.weather[0])
      setWind(result.wind)
    }

    setWeatherState();
  }, []);

  useEffect(() => {
    console.log("useEffect : ", position)
  }, [position])

  return (
    <div className="App">
      <h3>날씨</h3>
      <h4>경도 : {position.longitude} 위도 : {position.latitude}</h4>
      <h4>현재 위치 도시 : {city}</h4>
      <h4>날씨 : {weather.main} 날씨 설명 : {weather.description}</h4>
      <h4>풍향 : {wind.deg} 풍속 : {wind.speed}</h4>
      {weather.main == 'Clear' ? <img src={`https://openweathermap.org/img/w/${weather.icon}.png`} /> : "뇌가 없음"}
    </div>
  );
}

export default WeatherApp;
