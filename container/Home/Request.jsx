import React from "react";
import Image from "next/image";

export default function Request() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1300px] px-6 xl:px-16 py-20 text-slate-100 ">
        <h1 className="text-3xl font-medium">Book a ride now</h1>

        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="max-w-[450px] w-full xl:w-1/2 mt-10">
            <input
              placeholder="Pickup location"
              className="w-full bg-slate-200 h-[50px] rounded-md px-5 text-black"
            />
            <input
              placeholder="Destination"
              className="w-full mt-4 bg-slate-200 h-[50px] rounded-md px-5 text-black"
            />

            <button className="border shadow-md text-sm mt-10 border-white rounded-md text-primary bg-white px-10 py-3">
              Request Now
            </button>
          </div>

          <div className="w-full xl:w-1/2 mt-12 xl:mt-0 flex items-center justify-center">
            <div className="h-80 relative shadow-xl -rotate-6 w-80">
              <Image
                className="rounded-xl "
                src="/images/request_image.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
