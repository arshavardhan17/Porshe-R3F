import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Page1 } from "./components/Page1";
import Pageno2 from "./components/Pageno2";
import Page3 from "./components/Page3";
function App() {
  return (
    <div>
      <div className=" h-screen w-full fixed top-0">
        <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
          <ambientLight intensity={1} />
          <OrbitControls enableZoom={false} enableRotate={false} />
          <Experience />
          <Environment preset="sunset" />
        </Canvas>
      </div>
      <Page1 />
      <Pageno2 />
      <Page3 />
    </div>
  );
}

export default App;
