import styles from "./Metrics.module.scss";

export const Metrics = ({ forecast}) => {
  if (!forecast) return null;

  const current = forecast.current;
  const wind = forecast.wind;
  const visibility = forecast.visibility;

  return (
    <div>
      <div className={styles.metric__list}>
        <div className={styles.metric__item}>
          <span>Feels like</span>
          <p>{Math.round(current.feels_like)}°C</p>
        </div>

        <div className={styles.metric__item}>
          <span>Min / Max</span>
          <div className={styles.metric__minMax}>
            <div className={styles.metric__min}>
              <span className={styles.metric__value}>{Math.round(forecast.daily && forecast.daily[0] ? forecast.daily[0].temp.min : current.temp_min || current.temp)}°</span>
              <span className={styles.metric__label}>Min</span>
            </div>

            <div className={styles.metric__max}>
              <span className={styles.metric__value}>{Math.round(forecast.daily && forecast.daily[0] ? forecast.daily[0].temp.max : current.temp_max || current.temp)}°</span>
              <span className={styles.metric__label}>Max</span>
            </div>
          </div>
        </div>

        <div className={styles.metric__item}>
          <span>Humidity</span>
          <p>{current.humidity}%</p>
        </div>

        <div className={styles.metric__item}>
          <span>Pressure</span>
          <p>{current.pressure} hPa</p>
        </div>

        <div className={styles.metric__item}>
          <span>Wind speed</span>
          <p>{wind.speed.toFixed(1)} m/s</p>
        </div>

        <div className={styles.metric__item}>
          <span>Visibility</span>
          <p>{(visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>
    </div>
  );
};
