{/*import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const SaturnModel = () => {
  const saturnRef = useRef();

  useFrame(() => {
    saturnRef.current.rotation.y += 0.005;  // Автоповорот
  });

  return (
    <mesh ref={saturnRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#A78AFF" />
      {/* Кольца Сатурна */}
      {/*<mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2, 32]} />
        <meshStandardMaterial color="#6BE6FF" transparent opacity={0.6} />
      </mesh>
    </mesh>
  );
};


{/*import { useGLTF, useAnimations } from '@react-three/drei'

export default function SaturnModel({ position }) {
  // Загрузка модели и анимаций
  const { scene, animations } = useGLTF('/models/saturn.glb')
  const { actions } = useAnimations(animations, scene)

  // Автовоспроизведение анимации
  useEffect(() => {
    actions['SaturnRotation'].play()  // Запуск анимации вращения
    return () => actions['SaturnRotation'].stop()  // Очистка при размонтировании
  }, [actions])

  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={[0.8, 0.8, 0.8]}  // Масштабирование модели
    />
  )
}*/}