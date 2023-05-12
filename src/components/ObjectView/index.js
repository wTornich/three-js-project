
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Sphere, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { BorderCanvas } from "./style";

function Staff() {
  const { scene } = useGLTF("staff.gltf")
  const objRef = useRef();
  useFrame(() => {
    objRef.current.rotation.y += 0.01;
  })

  return <primitive ref={objRef} object={scene} scale={1} />
}

/*
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  );
}
*/

function ObjectView() {
  return (
    <BorderCanvas>
      <Canvas camera={{ fov: 20 }}
        style={{ height: 450, width: 450 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Staff />
      </Canvas>
    </BorderCanvas>
  );
}

export default ObjectView;
