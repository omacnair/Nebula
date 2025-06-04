import { useState, useEffect } from 'react';
import styles from './NewsSection.module.css';

export default function NewsCard({ post }) {
  const [imageStatus, setImageStatus] = useState('loading'); // loading/loaded/error

  useEffect(() => {
    if (!post.imageUrl) {
      setImageStatus('error');
      return;
    }

    const img = new Image();
    img.src = post.imageUrl;
    
    img.onload = () => setImageStatus('loaded');
    img.onerror = () => setImageStatus('error');

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [post.imageUrl]);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imageStatus === 'loaded' ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            {imageStatus === 'error' ? 'Изображение не загружено' : 'Загрузка...'}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <a
          href={post.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Читать в Telegram →
        </a>
      </div>
    </div>
  );
}