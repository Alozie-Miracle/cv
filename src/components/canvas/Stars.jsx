import React, { useRef, Suspense} from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2})

  const Ref = useRef();

  useFrame((state, delta) => {
    Ref.current.rotation.x -= delta/10;
    Ref.current.rotation.y -= delta/15;
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={Ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color='#f272c8' size={0.002} sizeAttentenuation={true} depthWrite = {false} />
      </Points>
    </group>
  )
}

const StarCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null} >
          <Stars />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarCanvas