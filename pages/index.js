import dynamic from "next/dynamic";

const [Navbar] = [dynamic(() => import("container/Navbar"))];

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
