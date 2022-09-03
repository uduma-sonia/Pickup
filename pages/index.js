import dynamic from "next/dynamic";

const [Navbar, Hero] = [
  dynamic(() => import("container/Navbar")),
  dynamic(() => import("container/Home/Hero")),
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
