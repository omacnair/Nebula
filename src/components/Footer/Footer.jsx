import styles from './Footer.module.css';
import telegramIcon from './telegram-icon.svg'; // Замените на вашу иконку телеграма

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Левая часть футера */}
        <div className={styles.leftSection}>
          <div className={styles.topLine}></div>
          <h3 className={styles.year}>2025</h3>
          <p className={styles.madeBy}>Made by Pelagea Cors</p>
          <p className={styles.coords}>Координаты Сатурна: 10h 45m 43s, +9° 15' 03"</p>
        </div>

        {/* Правая часть футера */}
        <div className={styles.rightSection}>
          <h4 className={styles.contactsTitle}>Контакты</h4>
          <div className={styles.contactItem}>
            <a href="https://t.me/PCors" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className={styles.telegramIcon} />
              <span>@PCors</span>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="tel:+79162100485">+7(916) 210-04-85</a>
          </div>
        </div>
      </div>
    </footer>
  );
}