import styles from './SaturnSection.module.css'

export default function SaturnSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Левая половина */}
        <div className={styles.leftSide}>
          <h2 className={styles.leftTitle}>КОСМОС БЛИЖЕ, ЧЕМ КАЖЕТСЯ</h2>
        </div>

        {/* Вертикальная разделительная линия */}
        <div className={styles.divider}></div>

        {/* Правая половина */}
        <div className={styles.rightSide}>
          <h3 className={styles.rightTitle}>САТУРН: ВРАТА К ВНЕЗЕМНОЙ ЖИЗНИ</h3>
          <div className={styles.textContent}>
            <p>
              Мы выбрали Сатурн не случайно. Этот газовый гигант хранит одну из самых интригующих 
              тайн Солнечной системы - его спутник <strong>Энцелад</strong>.
            </p>
            
            <p>
              Под ледяной коркой Энцелада толщиной 20-25 км скрывается <strong>глобальный солёный океан</strong>, 
              глубиной около 10 км. Космический аппарат "Кассини" обнаружил на южном полюсе 
              мощные <strong>гейзеры</strong>, выбрасывающие воду на сотни километров в космос.
            </p>

            <p>
              В этих выбросах были обнаружены:
            </p>
            <ul className={styles.list}>
              <li>Органические молекулы</li>
              <li>Аммиак и метан</li>
              <li>Минералы, характерные для гидротермальных источников</li>
              <li>Водород - потенциальный источник энергии для микроорганизмов</li>
            </ul>

            <p>
              По мнению NASA, Энцелад - <strong>самое вероятное место</strong> для существования жизни 
              за пределами Земли в нашей Солнечной системе.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}