import dynamic from "next/dynamic";

const [
  Navbar,
  Hero,
  HireBicycle,
  DriverFeatures,
  Request,
  Logistics,
  RiderFeatures,
  FooterView,
] = [
  dynamic(() => import("container/Navbar")),
  dynamic(() => import("container/Home/Hero")),
  dynamic(() => import("container/Home/HireBicycle")),
  dynamic(() => import("container/Home/DriverFeatures")),
  dynamic(() => import("container/Home/Request")),
  dynamic(() => import("container/Home/Logistics")),
  dynamic(() => import("container/Home/RiderFeatures")),
  dynamic(() => import("container/FooterView")),
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HireBicycle />
      <DriverFeatures />
      <RiderFeatures />
      <Request />
      <Logistics />
      <FooterView />
    </>
  );
}
