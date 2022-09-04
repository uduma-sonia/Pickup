import gsap from "gsap";

export default function heroAnimation() {
  gsap.from(".hero_text", {
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.to(".hero_text", {
    opacity: 1,
  });
}
