import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import Image from "next/image";

export default function Features() {
  return (
    <div className="mx-auto max-w-[1300px] px-6 xl:px-16 py-20">
      <div className="mx-auto max-w-[400px] text-center ">
        <h3 className="font-bold text-3xl xl:text-4xl leading-tight">
          Stick with us
        </h3>

        <p className="text-sm text-primary font-normal my-6">
          Available in all major cities, move around with ease without breaking
          bank.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 xl:grid-cols-3 gap-14 xl:gap-4">
        <div className="xl:pr-20">
          <div>
            <ImUserTie size="1.3rem" color="#062775" />
          </div>
          <p className="font-semibold text-gray-900 text-2xl mt-5">
            Be your own boss
          </p>
          <p className="text-sm mt-3">
            Ride with others, split the bill. You can lessen traffic by riding
            together.
          </p>
        </div>

        <div className="xl:pr-20">
          <div>
            <AiFillCar size="1.3rem" color="#062775" />
          </div>
          <p className="font-semibold text-gray-900 text-2xl mt-5">Car pool</p>
          <p className="text-sm mt-3">
            Ride with others, split the bill. You can lessen traffic by riding
            together.
          </p>
        </div>

        <div className="xl:pr-20">
          <div>
            <FaCalendarAlt size="1.3rem" color="#062775" />
          </div>
          <p className="font-semibold text-gray-900 text-2xl mt-5">
            Schedule rides
          </p>
          <p className="text-sm mt-3">
            By planning your trips in advance, you can save money.
          </p>
        </div>
      </div>

      <div className="mt-32 justify-center gap-10 hidden xl:flex">
        <div className="w-[150px] h-[50px] relative cursor-pointer">
          <Image
            src="/images/download_appstore.svg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[150px] h-[50px] relative cursor-pointer">
          <Image
            className="rounded-lg"
            src="/images/download_google.svg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center">
          <a className="cursor-pointer text-primary font-semibold underline">
            Signup
          </a>{" "}
          to sign driving
        </p>
      </div>
    </div>
  );
}
