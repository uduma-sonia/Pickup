import React from "react";
import { RiWallet3Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";

export default function DriverFeatures() {
  return (
    <div className="mx-auto max-w-[1300px] px-6 xl:px-16 py-20">
      <div className="mx-auto max-w-[400px] text-center ">
        <h3 className="font-bold text-3xl xl:text-4xl leading-tight">
          Partner with us
        </h3>

        <p className="text-sm text-primary font-normal my-6">
          Earn money at your own pace.
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
            Set your own hours. Make money, cash out whenever you want.
          </p>
        </div>

        <div className="xl:pr-20">
          <div>
            <RiWallet3Fill size="1.3rem" color="#062775" />
          </div>
          <p className="font-semibold text-gray-900 text-2xl mt-5">Earn well</p>
          <p className="text-sm mt-3">
            Earn cash, keep your tips, and withdraw it whenever you like.
          </p>
        </div>

        <div className="xl:pr-20">
          <div>
            <FaCoins size="1.3rem" color="#062775" />
          </div>
          <p className="font-semibold text-gray-900 text-2xl mt-5">
            Mulitple income
          </p>
          <p className="text-sm mt-3">Register all of your vehicles.</p>
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center border border-primary rounded-lg w-fit mx-auto p-3">
          <a className="cursor-pointer text-primary font-semibold underline">
            Signup
          </a>{" "}
          to start driving
        </p>
      </div>
    </div>
  );
}
