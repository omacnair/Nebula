import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

export default function Header() {
  // Состояние для мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Данные для пунктов меню
  const navItems = [
    { id: 1, label: 'Главная', path: '/' },
    { id: 2, label: 'Планеты', path: '/planets' },
    { id: 3, label: 'Отправь сигнал', path: '/send-signal' }
  ];

  // Функция переключения мобильного меню
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Блок с логотипом и названием (прижаты к левому краю) */}
        <div className={styles.brand}>
           <div className={styles.logoHoverWrapper}>
          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} alt="Nebula Flow" className={styles.logo} />
          </NavLink>
          </div>
          <span className={styles.brandName}>NEBULA FLOW</span>
        </div>

        {/* Основная навигация (прижата к правому краю) */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Кнопка мобильного меню (появляется на узких экранах) */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>

      {/* Мобильное меню (появляется при клике) */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <NavLink 
              key={`mobile-${item.id}`}
              to={item.path}
              className={({ isActive }) => 
                `${styles.mobileLink} ${isActive ? styles.activeLink : ''}`
              }
              onClick={toggleMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}