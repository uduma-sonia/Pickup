import dynamic from "next/dynamic";

const [Navbar, Hero, HireBicycle, Features, Request] = [
  dynamic(() => import("container/Navbar")),
  dynamic(() => import("container/Home/Hero")),
  dynamic(() => import("container/Home/HireBicycle")),
  dynamic(() => import("container/Home/Features")),
  dynamic(() => import("container/Home/Request")),
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HireBicycle />
      <Features />
      <Request />
    </>
  );
}
