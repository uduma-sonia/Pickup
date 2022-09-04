import React from "react";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

export default function FooterView() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1300px] px-6 xl:px-16 text-slate-100 pt-20">
        <h1 className="text-3xl font-semibold tracking-tighter">Pickup</h1>

        <div className="flex flex-col xl:flex-row justify-between pb-14">
          <div className="mt-14 font-light flex flex-col xl:flex-row gap-10 text-sm">
            <Link href="/" passHref>
              - About us
            </Link>

            <Link href="/" passHref>
              - Contact us
            </Link>

            <Link href="/" passHref>
              - Blog
            </Link>

            <Link href="/" passHref>
              - Career
            </Link>
          </div>

          <div className="justify-center gap-10 flex mt-6 xl:mt-0">
            <div className="transition ease-in-out hover:scale-105 duration-300 w-[160px] h-[53px] flex items-center gap-3 cursor-pointer border rounded-lg">
              <DiApple size="1.6rem" />

              <div>
                <p className="text-xs"> Download on the</p>
                <p className="font-semibold text-base xl:text-lg">App store</p>
              </div>
            </div>

            <div className="transition ease-in-out hover:scale-105 duration-300 w-[160px] h-[53px] flex items-center gap-3 cursor-pointer border rounded-lg">
              <FcGoogle size="1.6rem" />

              <div>
                <p className="text-xs"> Get it on</p>
                <p className="font-semibold text-base xl:text-lg">
                  Google Play
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-400 mx-auto max-w-[1300px] text-slate-100 py-10 flex flex-col xl:flex-row justify-between">
          <div className="flex">
            <p className="cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-8 h-8">
              <Link href="/" passHref>
                <span>
                  <SiFacebook size="1rem" />
                </span>
              </Link>
            </p>
            <p className="mx-4 cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-8 h-8">
              <Link href="/" passHref>
                <span>
                  <AiFillTwitterCircle size="1rem" />
                </span>
              </Link>
            </p>
            <p className="cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-8 h-8">
              <Link href="/" passHref>
                <span>
                  <RiInstagramFill size="1rem" />
                </span>
              </Link>
            </p>
          </div>

          <p className="text-xs font-extralight mt-6 xl:mt-0">
            Copyright © 2022 Pickup Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
