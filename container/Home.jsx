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
  Preloader,
] = [
  dynamic(() => import("container/Navbar")),
  dynamic(() => import("components/Home/Hero")),
  dynamic(() => import("components/Home/HireBicycle")),
  dynamic(() => import("components/Home/DriverFeatures")),
  dynamic(() => import("components/Home/Request")),
  dynamic(() => import("components/Home/Logistics")),
  dynamic(() => import("components/Home/RiderFeatures")),
  dynamic(() => import("container/FooterView")),
  dynamic(() => import("components/Preloader/Preloader")),
];

export default function HomeView() {
  return (
    <>
      <Preloader />
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
