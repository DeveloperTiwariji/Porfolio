"use client"

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei"

// function Model() {
//   // const duck = useGLTF("/assets/3d/duck.glb")

//   return (
//     <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
//     <primitive object={} scale={2.5} position={[0, -1, 0]} rotation={[0, 0.5, 0]} />
//     </Float>
//   )
// }

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <Model /> */}
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Satyam Tiwari
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:text-xl md:mt-5 text-gray-600 dark:text-gray-300">
            Frontend Developer & DevOps Engineer
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
