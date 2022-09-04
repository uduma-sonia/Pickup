import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="mx-auto max-w-[1300px] h-[80px] px-6 xl:px-16">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-end gap-10 ">
            <h1 className="text-3xl font-semibold tracking-tighter">Pickup</h1>

            <div className="items-center font-normal gap-5 text-sm text-primary hidden xl:flex">
              <a className="cursor-pointer"> Product</a>
              <a className="cursor-pointer"> Company</a>
              <a className="cursor-pointer"> Career</a>
            </div>
          </div>

          <div className="items-center font-light gap-5 text-sm text-primary flex xl:hidden">
            <button
              onClick={() => setOpen(true)}
              className="w-10 py-2 transition hover:scale-[0.95]"
            >
              <div
                className={`border border-black bg-black transition-all ${
                  open ? "rotate-[40deg]" : "rotate-0"
                }`}
              />
              <div
                className={`border border-black bg-black mt-2 ${
                  open ? "rotate-[-40deg] w-[100%]" : "rotate-0 w-[80%]"
                }`}
              />
            </button>
          </div>

          <div className="items-center gap-5 hidden xl:flex">
            <button className="border text-sm border-primary rounded-md text-primary w-24 py-2 transition hover:scale-[0.95]">
              Log in
            </button>

            <button className="border text-sm border-primary rounded-md text-white bg-primary w-24 py-2 transition hover:scale-[0.95] hover:opacity-90">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[85%]">
                  <div className="px-5 py-14">
                    <div className="flex justify-between">
                      <a className="cursor-pointer"> Product</a>
                      <a className="cursor-pointer"> Company</a>
                      <a className="cursor-pointer"> Career</a>
                    </div>

                    <div className="items-center gap-5 mt-10 flex justify-center">
                      <button className="border text-sm border-primary rounded-md text-primary w-24 py-2 transition hover:scale-[0.95]">
                        Log in
                      </button>

                      <button className="border text-sm border-primary rounded-md text-white bg-primary w-24 py-2 transition hover:scale-[0.95] hover:opacity-90">
                        Sign up
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
