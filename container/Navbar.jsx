import React from "react";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-[1300px]  h-[80px] px-6 xl:px-16">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-end gap-10 ">
          <h1 className="text-3xl font-semibold tracking-tighter">Pickup</h1>

          <div className="flex items-center font-light gap-5 text-sm text-primary">
            <a className="cursor-pointer"> Product</a>

            <a className="cursor-pointer"> Company</a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="border text-sm border-primary rounded-md text-primary w-24 py-2">
            Driver
          </button>

          <button className="border text-sm border-primary rounded-md text-white bg-primary w-24 py-2">
            Rider
          </button>
        </div>
      </div>
    </div>
  );
}
