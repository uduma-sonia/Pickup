import gsap, { Back } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BicycleAnimation() {
  gsap.from(".bicycle_animation_btn", {
    opacity: 0,
    ease: "circ.out",
    delay: 0.6,
    y: 10,
    scrollTrigger: {
      trigger: ".bicycle_animation_trigger",
    },
  });
}
