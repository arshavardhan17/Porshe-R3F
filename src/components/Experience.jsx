import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";

gsap.registerPlugin(ScrollTrigger);
export const Experience = () => {
  const model = useLoader(GLTFLoader, "./models/Car.gltf");
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  scene.position.z = -10;

  //leva
  const { position, rotation } = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.05,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to(scene.position, {
      z: 0,
      x: 0,
      y: 0,

      scrollTrigger: {
        trigger: "#second",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: true,
      },
    });
    tl.to(scene.rotation, {
      y: -1.8,
      x: 0,
      z: 0,
      scrollTrigger: {
        trigger: "#second",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: true,
      },
    });

    tl.to(scene.rotation, {
      y: 0.005,
      z: -0.09,
      x: 0.15,
      scrollTrigger: {
        trigger: "#third",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: true,
      },
    });

    tl.to(scene.position, {
      x: -5.0,
      y: 0,
      z: 0,

      scrollTrigger: {
        trigger: "#third",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <primitive
        object={model.scene}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
      />
    </>
  );
};
