import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

/**
 * Использует Three.js через React Three Fiber
 */
export default function StarsParallax() {
  // 1. Создаем ссылку для управления группой звёзд
  const starsRef = useRef()
  const isMobile = window.innerWidth < 768

  // Параметры для адаптации под устройства
   const starsConfig = {
    count: isMobile ? 800 : 1500,
    speed: isMobile ? 0.2 : 0.4,
    radius: isMobile ? 40 : 60,
    factor: isMobile ? 2 : 3
  }




  // 4. Хук useFrame вызывается перед каждым рендером кадра (≈60 раз/сек)
  useFrame((state, delta) => {
    if (!starsRef.current) return

     // Медленное вращение звездного поля
    starsRef.current.rotation.x += delta * 0.02
    starsRef.current.rotation.y += delta * 0.01
    
    // Легкое мерцание (изменение масштаба)
    starsRef.current.scale.x = 1 + Math.sin(state.clock.getElapsedTime()) * 0.01
    starsRef.current.scale.y = 1 + Math.cos(state.clock.getElapsedTime()) * 0.01
  })



  return (
    // 8. Группа для трансформаций (позиция/вращение)
    <group ref={starsRef}>
      {/* 9. Компонент Stars из drei с настройками */}
      <Stars
        radius={60}     // Радиус сферы распределения звёзд
        depth={40}      // Глубина распределения (Z-координата)
        count={2000}    // Количество звёзд (оптимально 1000-5000)
        factor={3}      // Размер звёзд
        fade           // Плавное исчезновение у краёв
        speed={0.5}    // Скорость анимации мерцания
      />
    </group>
  )
}