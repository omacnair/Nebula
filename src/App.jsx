import { Canvas } from '@react-three/fiber'
import StarsBackground from './components/StarsBackground'
import Header from './components/Header/Header';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlanetCards from './pages/Planets/PlanetCards';
import SendForm from './pages/SendForm/SendForm';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
       <>
      {/*
        1. Canvas - корневой компонент React Three Fiber
        Создает WebGL-рендерер и сцену Three.js
      */}
      <Canvas
        style={{
          position: 'fixed', // Фиксированное позиционирование
          top: 0,
          left: 0,
          width: '100vw',    // На всю ширину viewport
          height: '100vh',   // На всю высоту viewport
          zIndex: -1,        // Под основным контентом
          pointerEvents: 'none',// Пропускает клики сквозь Canvas
          background: '#0a0412' 
        }}
        camera={{ position: [0, 0, 1], fov: 75 }} // Позиция камеры (Z = 1)
      >
        {/* 2. Компонент звёздного фона */}
        <StarsBackground />
      </Canvas>

      <div className="content-wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<PlanetCards />} />
            <Route path="/send-signal" element={<SendForm />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
      </div>
    </>
  )
}
