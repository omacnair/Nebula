import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

/**
 * PlanetModel - Компонент для отображения 3D-модели планеты
 * 
 * Props:
 * @param {string} modelPath - Путь к .glb файлу модели
 * @param {boolean} [autoRotate=true] - Автоматическое вращение модели
 * @param {number} [rotationSpeed=2] - Скорость вращения (1-5)
 * 
 * Особенности:
 * - Оптимизированная загрузка через Suspense
 * - Автоматическая предзагрузка моделей
 * - Базовая настройка освещения и окружения
 */
export const PlanetModel = ({ 
  modelPath, 
  autoRotate = true, 
  rotationSpeed = 2 
}) => {
  const { scene } = useGLTF(modelPath);
  
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Базовое освещение сцены */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Асинхронная загрузка модели */}
      <Suspense fallback={null}>
        <primitive 
          object={scene} 
          scale={[1, 1, 1]}
          rotation-y={Math.PI / 4}
        />
      </Suspense>
      
      {/* Окружение и фон */}
      <Environment preset="dawn" />
      
      {/* Управление камерой */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={rotationSpeed}
      />
    </Canvas>
  );
};

/**
 * Предзагрузка моделей планет для улучшения производительности
 * Должна вызываться в корневом компоненте приложения
 */
export const preloadPlanetModels = (planetsData) => {
  planetsData.forEach(planet => {
    useGLTF.preload(planet.model);
  });
};