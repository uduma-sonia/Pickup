import React from "react";
import { BsDot } from "react-icons/bs";

export default function Logistics() {
  return (
    <div className="mx-auto max-w-[1300px] py-14 xl:py-20 px-6 xl:px-16">
      <div className="mx-auto max-w-[400px] text-center ">
        <h3 className="font-bold text-3xl xl:text-4xl leading-tight">
          Shipping Service
        </h3>

        <p className="text-sm text-primary font-normal my-6">
          Send to anywhere in the world, track and manage your package,
        </p>
      </div>

      <div className="mt-16 flex flex-col xl:flex-row justify-around ">
        <p className="flex items-center min-w-fit">
          <BsDot size="2rem" />
          Domestic and International shipping
        </p>

        <p className="flex items-center min-w-fit">
          <BsDot size="2rem" />
          Affordable Shipping rate
        </p>

        <p className="flex items-center min-w-fit">
          <BsDot size="2rem" />
          Real time parcel tracker
        </p>
      </div>

      <div className="mt-20">
        <p className="text-center border bg-primary text-slate-100 border-primary rounded-lg w-fit mx-auto py-3 px-6">
          Coming Soon!
        </p>
      </div>
    </div>
  );
}
