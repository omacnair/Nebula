import { useState } from 'react';
import { planetsData } from './planetsData';
import styles from './PlanetCards.module.css';

export default function PlanetCards() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className={styles.planetsPage}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.mainTitle}>Планеты рядом с нами</h1>
        <h2 className={styles.subTitle}>И то, что вы о них не знали</h2>
      </div>

      <div className={styles.planetsGrid}>
        {planetsData.map((planet, index) => (
          <div 
            key={index}
            className={`${styles.planetCard} ${activeCard === index ? styles.active : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className={styles.cardImage}>
              <img src={planet.img} alt={planet.title} />
              <h3 className={styles.cardTitle}>{planet.title}</h3>
            </div>
            
            <div className={styles.cardFact}>
              <p>{planet.fact}</p>
            </div>

            <div className={styles.infoIcon}>i</div>
          </div>
        ))}
      </div>
    </div>
  );
}