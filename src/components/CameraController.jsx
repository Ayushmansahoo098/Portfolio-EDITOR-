import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { scrollState } from '../hooks/useScrollAnimation';
import { lerpVector3 } from '../utils/lerp';

// The camera flies along this path
const cameraCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 15),      // 0: Hero 
  new THREE.Vector3(30, 2, -15),    // 1: About 
  new THREE.Vector3(-30, -2, -45),  // 2: Projects 
  new THREE.Vector3(0, -25, -75),   // 3: Skills 
  new THREE.Vector3(0, 5, -103),    // 4: Contact 
]);

// The camera looks at these points
const lookAtCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),       // Hero focus
  new THREE.Vector3(30, 0, -30),    // About focus
  new THREE.Vector3(-30, 0, -60),   // Projects focus
  new THREE.Vector3(0, -30, -90),   // Skills focus
  new THREE.Vector3(0, 0, -120),    // Contact focus
]);

export function CameraController() {
  const currentPos = useRef(new THREE.Vector3(0, 0, 15));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    // scrollState.progress goes from 0 to 1
    const p = Math.min(Math.max(scrollState.progress, 0), 1);
    
    // Get target position and lookAt from curves
    const targetPos = cameraCurve.getPointAt(p);
    const targetLookAt = lookAtCurve.getPointAt(p);
    
    // Smooth lerp for cinematic motion (with delay/damping)
    lerpVector3(currentPos.current, targetPos.x, targetPos.y, targetPos.z, 0.05);
    lerpVector3(currentLookAt.current, targetLookAt.x, targetLookAt.y, targetLookAt.z, 0.05);
    
    state.camera.position.copy(currentPos.current);
    state.camera.lookAt(currentLookAt.current);
  });

  return null;
}
