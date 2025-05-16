import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Target = (props: any) => {
  const targetRef = useRef<THREE.Object3D | null>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (targetRef.current && targetRef.current.position) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true
      });
    }
  })

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
        <primitive object={scene} />
    </mesh>
  );
};

export default Target;
