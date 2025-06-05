import React, { useState, useEffect } from 'react';
import styles from './NewsSection.module.css';

const NewsCard = ({ newsItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        {newsItem.image ? (
          <img src={newsItem.image} alt={newsItem.title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>NebulaFlow</div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{newsItem.title}</h3>
        
        {/* Всплывающее окно */}
        {isHovered && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <p>{newsItem.description}</p>
              <a 
                href="https://t.me/NebulaFloww" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.telegramLink}
              >
                → Telegram
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;