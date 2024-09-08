import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
function App() {
  return (
    <div>
      <div className="bg-white w-full h-10 fixed z-10"> kdld</div>
      <div className=" bg-black h-screen">
        <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
          <ambientLight intensity={1} />
          <OrbitControls />
          <Experience />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
