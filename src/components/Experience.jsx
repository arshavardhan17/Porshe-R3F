import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { Html, useScroll } from "@react-three/drei";
import { Page1 } from "./Page1";
import Page3 from "./Page3";

export const Experience = () => {
  const model = useLoader(GLTFLoader, "./models/Car.gltf");

  return (
    <>
      <primitive object={model.scene} />
    </>
  );
};
