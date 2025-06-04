import { useState } from 'react';
import styles from './SendForm.module.css';

export default function SendForm() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    direction: 'geostationary',
    quantumEncryption: false
  });

  // Варианты направлений с описаниями
  const directions = [
    {
      id: 'geostationary',
      label: 'Геостационарные спутники',
      description: 'Высота 35 786 км, постоянное положение над Землёй'
    },
    {
      id: 'polar',
      label: 'Полярные спутники',
      description: 'Низкая орбита (600-800 км), полное покрытие Земли'
    },
    {
      id: 'iss',
      label: 'Международная космическая станция',
      description: 'Высота ~400 км, период обращения 90 минут'
    },
    {
      id: 'deep',
      label: 'Глубокий космос',
      description: 'Межпланетная сеть связи (DSN)'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Сигнал отправлен в направлении: ${
      directions.find(d => d.id === formData.direction).label
    }${formData.quantumEncryption ? ' с квантовым шифрованием' : ''}`);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <main className={styles.mainContainer}> {/* Добавлен основной контейнер */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Отправить космический сигнал</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Поле имени */}
          <div className={styles.formGroup}>
            <label>Ваше имя:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ваш позывной"
            />
          </div>

          {/* Поле сообщения */}
          <div className={styles.formGroup}>
            <label>Сообщение:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Текст вашего сообщения..."
              rows="4"
            />
          </div>

          {/* Выбор направления */}
          <div className={styles.formGroup}>
            <label>Направление передачи:</label>
            <select 
              name="direction"
              value={formData.direction}
              onChange={handleChange}
              className={styles.directionSelect}
            >
              {directions.map(dir => (
                <option key={dir.id} value={dir.id}>
                  {dir.label} - {dir.description}
                </option>
              ))}
            </select>
          </div>

          {/* Чекбокс квантового шифрования */}
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="quantumEncryption"
              name="quantumEncryption"
              checked={formData.quantumEncryption}
              onChange={handleChange}
            />
            <label htmlFor="quantumEncryption">
              Использовать квантовое шифрование
            </label>
          </div>

          {/* Кнопка отправки */}
          <button type="submit" className={styles.submitButton}>
            Инициировать передачу
          </button>
        </form>
      </div>
    </main>
  );
}