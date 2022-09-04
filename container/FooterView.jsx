import React from "react";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function FooterView() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1300px] px-6 xl:px-16 text-slate-100 py-20">
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

          <div className="justify-center gap-10 hidden xl:flex">
            <div className="transition ease-in-out hover:scale-105 duration-300 w-[160px] h-[53px] flex items-center gap-3 cursor-pointer border rounded-lg">
              <DiApple size="1.6rem" />

              <div>
                <p className="text-xs"> Download on the</p>
                <p className="font-semibold text-lg">App store</p>
              </div>
            </div>

            <div className="transition ease-in-out hover:scale-105 duration-300 w-[160px] h-[53px] flex items-center gap-3 cursor-pointer border rounded-lg">
              <FcGoogle size="1.6rem" />

              <div>
                <p className="text-xs"> Get it on</p>
                <p className="font-semibold text-lg">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-400 mx-auto max-w-[1300px] px-6 xl:px-16 text-slate-100 pt-14 flex flex-col xl:flex-row justify-between">
          <div className="flex gap-7">
            <p className="cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-10 h-10">
              <Link href="/" passHref>
                <SiFacebook size="1.2rem" />
              </Link>
            </p>
            <p className="cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-10 h-10">
              <Link href="/" passHref>
                <AiFillTwitterCircle size="1.2rem" />
              </Link>
            </p>
            <p className="cursor-pointer hover:-translate-y-3 border border-slate-300 transition duration-300 rounded-lg flex justify-center items-center w-10 h-10">
              <Link href="/" passHref>
                <RiInstagramFill size="1.2rem" />
              </Link>
            </p>
          </div>

          <p className="text-xs font-extralight">
            Copyright © 2022 Pickup Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
