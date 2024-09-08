import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export const Experience = () => {
  const model = useLoader(GLTFLoader, "./models/Car.gltf");
  const scrollData = useScroll();

  return (
    <>
      <primitive object={model.scene} />
    </>
  );
};
