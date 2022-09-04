import React, { useEffect, useRef } from "react";
import eventEmitter from "utils/eventEmitter";
import Image from "next/image";
import heroAnimation from "animations/hero";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    eventEmitter.once("preloading-complete", () => {
      heroAnimation();
    });
  }, []);

  return (
    <div className="mx-auto max-w-[1300px] py-14 xl:py-20 px-6 xl:px-16">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full xl:w-1/2 max-w-[400px] text-center xl:text-left">
          <h3 className="font-bold text-3xl xl:text-4xl leading-tight hero_text">
            Get behind the wheel and get paid
          </h3>

          <p className="text-sm text-primary font-normal my-6">
            The quickest and least expensive way to travel. Get a ride and
            arrive at your location on time.
          </p>

          <div className="flex gap-5">
            <button className="border shadow-md text-sm border-primary rounded-md text-white bg-primary w-40 py-3 transition hover:scale-[0.95] hover:opacity-90">
              Become a driver
            </button>

            <button className="border text-sm border-primary rounded-md text-primary w-40 py-3 transition hover:scale-[0.95]">
              Book now
            </button>
          </div>
        </div>

        <div className="w-full xl:w-1/2 mt-12 xl:mt-0 flex items-center justify-center">
          <div className="h-72 relative shadow-lg w-72">
            <Image
              className="rounded-xl "
              src="/images/hero_image.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />

            <div className="w-[100px] h-[100px] absolute bottom-5 shadow-xl rounded-xl -left-6 xl:-left-16">
              <Image
                className="rounded-xl"
                src="/images/hero_image_2.jpg"
                alt=""
                width="100px"
                height="100px"
                objectFit="cover"
              />
            </div>

            <div className="w-[100px] h-[100px] absolute top-5 -right-6 xl:-right-16 shadow-xl rounded-xl">
              <Image
                className="rounded-xl"
                src="/images/hero_image_3.jpg"
                alt=""
                width="100px"
                height="100px"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
