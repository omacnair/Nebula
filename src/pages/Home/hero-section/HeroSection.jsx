import styles from './HeroSection.module.css'
import  img  from './saturnMain4.png'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <img 
          src={img}
          alt="Saturn" 
          className={styles.saturnImage}
        /> 
        
        <h1 className={styles.title}>Nebula Flow</h1>
        <h2 className={styles.slogan}>Go Beyond</h2>
      </div>
    </section>
  )
}