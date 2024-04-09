import {Environment, OrbitControls, Text} from '@react-three/drei';
import {Avatar} from './Avatar';

export const Experience = () => {
  return (
    <>
      <Environment preset='sunset' />
      <group position-y={-1}>
        <Avatar />
      </group>
    </>
  );
};
