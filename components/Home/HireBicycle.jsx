import React, { useEffect } from "react";
import BicycleAnimation from "animations/sections";

export default function HireBicycle() {
  useEffect(() => {
    BicycleAnimation();
  }, []);

  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1300px] px-6 xl:px-16 text-slate-100 py-20 flex flex-col xl:flex-row justify-between items-start xl:items-center">
        <div>
          <h1 className="text-3xl font-semibold">
            Pickup <span className="font-normal text-base">Yourself</span>
          </h1>

          <p className="mt-5 max-w-[400px] bicycle_animation_trigger">
            Rent one of our bicycles for the day and go at your own leisure.
          </p>
        </div>

        <button className="bicycle_animation_btn border shadow-lg text-sm mt-7 xl:mt-0 border-white rounded-md text-primary bg-white px-10 py-3 transition hover:scale-[0.95] ">
          Rent a bicycle
        </button>
      </div>
    </div>
  );
}
