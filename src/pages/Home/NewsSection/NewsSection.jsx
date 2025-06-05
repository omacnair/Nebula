import React from 'react';
import styles from './NewsSection.module.css';
import NewsCard from './NewsCard';
import newsData from './newsData'; 

// Основной компонент секции новостей
const NewsSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Последние новости</h2>
      
      <div className={styles.grid}>
        {newsData.length > 0 ? (
          newsData.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))
        ) : (
          <p className={styles.empty}>Новостей пока нет</p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;