import gsap, { Back, Power1 } from "gsap";

export default function heroAnimation() {
  gsap
    .timeline()
    .fromTo(".nav_bar", { opacity: 0 }, { opacity: 1, ease: Back.easeOut })
    .fromTo(
      ".hero_text",
      { opacity: 0, y: 150, duration: 0.4 },
      { opacity: 1, duration: 0.6, y: 0, ease: Back.easeOut }
    )
    .fromTo(
      ".hero_text_description",
      { opacity: 0, y: 180, duration: 0.4 },
      { opacity: 1, duration: 0.6, y: 0, ease: Back.easeOut },
      "-=0.8"
    )
    .fromTo(
      ".hero_buttons",
      { opacity: 0, y: 200, duration: 0.4 },
      { opacity: 1, duration: 0.6, y: 0, ease: Back.easeOut },
      "-=1"
    )
    .fromTo(
      ".hero_main_image",
      { opacity: 0 },
      { opacity: 1, ease: Back.easeOut },
      "-=1"
    )
    .fromTo(
      ".hero_left_image",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, ease: Back.easeOut },
      "-=2"
    )
    .fromTo(
      ".hero_right_image",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, ease: Back.easeOut },
      "-=3"
    );

  const floatAnimation = () => {
    const left_img = new gsap.timeline({ repeat: -1 });
    const right_img = new gsap.timeline({ repeat: -1 });

    left_img
      .to(".hero_left_image", {
        duration: 3,
        // y: "-=10",
        x: "+=15",
        ease: Power1.easeInOut,
      })
      .to(".hero_left_image", {
        duration: 2,
        // y: "+=10",
        x: "-=12",
        ease: Power1.easeInOut,
      });

    right_img
      .to(".hero_right_image", {
        duration: 3,
        y: "-=10",
        // x: "+=15",
        ease: Power1.easeInOut,
      })
      .to(".hero_right_image", {
        duration: 2,
        y: "+=10",
        // x: "-=12",
        ease: Power1.easeInOut,
      });

    gsap.to(left_img, { duration: 27, ease: Power1.easeInOut });
    gsap.to(right_img, { duration: 27, ease: Power1.easeInOut });
  };
  floatAnimation();
}
