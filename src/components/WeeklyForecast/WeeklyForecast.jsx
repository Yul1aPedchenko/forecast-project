export const WeeklyForecast = ({ city, onClose }) => {
  if (!city) return null;

  return (
    <div className="weekly-modal">
      <button onClick={onClose} className="close-btn">×</button>
      
      <h2>7-Day Forecast — {city.name}, {city.country}</h2>
      

      <p>Тут буде таблиця або картки з тижневим прогнозом</p>
      
      <div>
        <p>Поточна температура: {Math.round(city.temp)}°C</p>
        <p>Погода зараз: {city.weather}</p>
      </div>
    </div>
  );
};