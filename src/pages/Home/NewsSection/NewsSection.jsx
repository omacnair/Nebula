/*import { useState, useEffect } from 'react';
import { fetchTelegramNews } from '../../api/telegramApi';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchTelegramNews();
        setNews(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка новостей...</div>;
  }

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>Новости</h2>
      <div className={styles.newsGrid}>
        {news.length > 0 ? (
          news.map(item => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.newsImage}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=Изображение+не+загружено';
                    }}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    Нет изображения
                  </div>
                )}
              </div>
              <h3 className={styles.newsTitle}>{item.title}</h3>
            </div>
          ))
        ) : (
          <div className={styles.noNews}>Новостей пока нет</div>
        )}
      </div>
    </section>
  );
}*/

import { useState, useEffect } from 'react';
import { fetchPosts } from '../../../api/telegramApi';
import NewsCard from './NewsCard';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log('Загружены посты:', data); // Для отладки
        setPosts(data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div className={styles.loading}>Загрузка новостей...</div>;
  if (!posts.length) return <div className={styles.empty}>Новостей пока нет</div>;

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Новости</h2>
      <div className={styles.grid}>
        {posts.map(post => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}