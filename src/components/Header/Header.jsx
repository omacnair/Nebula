/*import { useState } from 'react';
import styles from './Header.module.css';
import logo from './logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Компонент шапки сайта с адаптивным меню
 * - Поддерживает десктопную и мобильную версии
 * - Включает анимации при взаимодействии
 * - Полностью адаптивный дизайн
 */
 /*export default function Header() {
  // 2. Состояние для управления мобильным меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Данные для навигационных пунктов
 const navItems = [
    { id: 1, label: 'Главная', path: '/' },
    { id: 2, label: 'Планеты', path: '/planets' },
    { id: 3, label: 'Ar-вид', path: '/ar-view' },
    { id: 4, label: 'Отправь сигнал', path: '/send-signal' }
  ];
  // 4. Функция переключения меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // 5. Основной контейнер шапки с анимацией появления
    <motion.header 
      className={styles.header}
      /*initial={{ y: -50 }}  // Начальное положение (вне экрана)
      animate={{ y: 0 }}     // Конечное положение
      transition={{ type: 'spring', stiffness: 300 }}  // Тип анимации*/
   {/*  >
      {/* 6. Контейнер логотипа с эффектом подсветки */}
    {/*   <motion.div 
        className={styles.logoContainer}
        whileHover={{ 
          filter: 'drop-shadow(0 0 8px rgba(107, 230, 255, 0.7))',
          transition: { duration: 0.3 }
        }}
      >
        
        <motion.img
          src={logo}
          alt="Nebula Flow"
          className={styles.logo}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>
      
      {/* 7. Название бренда с анимацией появления */}
   {/*    <motion.span 
        className={styles.brandName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        NEBULA FLOW
      </motion.span>

      {/* 8. Десктопное меню (скрывается на мобильных) */}
    {/*   <nav className={styles.nav}>
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={styles.navButton}
            whileHover={{ 
              scale: 1.03,
              textShadow: '0 0 5px var(--neon-blue)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>

      {/* 9. Кнопка мобильного меню (появляется на узких экранах) */}
   {/*    <motion.button 
        className={styles.menuToggle}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Открыть меню"
      >
        ☰
      </motion.button>

      {/* 10. Выпадающее меню с анимацией */}
  {/*     <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.dropdownMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={`mobile-${item.id}`}
                className={styles.navButton}
                whileHover={{ 
                  scale: 1.03,
                  textShadow: '0 0 5px var(--neon-blue)',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleMenu}  // Закрываем меню при клике
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}*/}


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