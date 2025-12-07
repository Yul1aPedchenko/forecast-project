import { useState } from "react";
import { useRecents } from "../../hooks/useRecents";
import { Container } from "../Container/Container";
import { CurrentDate } from "./CurrentDate/CurrentDate";
import styles from "./Hero.module.scss";
import { IoSearchOutline } from "react-icons/io5";

export const Hero = () => {
  const [query, setQuery] = useState("");
  const { addCity } = useRecents();
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return setError("Please don't leave this field empty. Thanks");
    setError("");

    try {
      await addCity(query);
      setQuery("");
    } catch (err) {
      setError("City not found");
    }
  };

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__wrapper}>
          <h1 className={styles.hero__title}>Weather dashboard</h1>
          <CurrentDate />
          <form onSubmit={handleSearch} className={styles.hero__form}>
            <input className={`${styles.hero__input} ${error ? styles.error : ""}`} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search location..." />
            <button type="submit" className={styles.hero__btn}>
              <IoSearchOutline />
            </button>
            {error && <p className={styles.hero__error}>{error}</p>}
          </form>
        </div>
      </Container>
    </section>
  );
};
