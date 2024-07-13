import { Environment, OrbitControls } from "@react-three/drei"

export const Experience = () => {
    return(
        <>
        
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>

        <OrbitControls makeDefault />
        <Environment preset="city" />

        </>
    )
}