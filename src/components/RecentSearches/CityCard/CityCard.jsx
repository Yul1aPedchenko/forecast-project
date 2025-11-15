import { useState } from "react";
import styles from "./CityCard.module.scss";
import { IoReload, IoHeart, IoHeartOutline } from "react-icons/io5";

export const CityCard = ({ city, onRefresh, onToggleFavourite, isFavourite }) => {
  const [showHourly, setShowHourly] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const now = new Date(city.dt ? city.dt * 1000 : Date.now());
  const dateStr = now.toLocaleDateString("en-GB"); 
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{city.name}, {city.country || ""}</h2>
        <div className={styles.actions}>
          <button onClick={() => onRefresh(city)}>
            <IoReload /> Reload
          </button>
          <button onClick={() => onToggleFavourite(city)}>
            {isFavourite ? <IoHeart /> : <IoHeartOutline />} Favourite
          </button>
        </div>
      </div>

      <div className={styles.main}>
        <p className={styles.temp}>{Math.round(city.temp)}°C</p>
        <p className={styles.description}>
          {city.icon && <img src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} alt={city.weather} />}
          {city.weather}
        </p>
      </div>

      <div className={styles.datetime}>
        <p>{dateStr}, {weekday}</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={() => setShowHourly(!showHourly)}>Hourly Forecast</button>
        <button onClick={() => setShowWeekly(!showWeekly)}>Weekly Forecast</button>
        <button onClick={() => setShowMore(!showMore)}>See More</button>
      </div>

    </div>
  );
};
