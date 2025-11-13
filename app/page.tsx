import Image from "next/image";
import NavBar from "./components/Navbar";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h2>Bienvenido a Nikeu</h2>
        <p>Explora nuestros productos.</p>
      </main>
    </>
  );
}
