import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../atoms/sheet";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

const benefits = [
  "✔ Shop online",
  "✔ Earn My Nintendo points",
  "✔ Save a Wish List",
];

const extraLinks = [
  { label: "📋 Order status" },
  { label: "🎮 Virtual Game Cards", external: true },
  { label: "🎁 Redeem code", external: true },
  { label: "🧾 My Nintendo", external: true },
  { label: "👤 Nintendo Account", external: true },
];

const LoginSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="group">
          <div className="py-1 px-3 rounded-3xl flex items-center gap-3 border border-primary group-hover:bg-primary">
            <FaUser className="text-primary group-hover:text-white" />
            <p className="text-base  text-primary group-hover:text-white">
              Log in / Sign up
            </p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="!bg-bgContainer">
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-lg font-semibold mb-4">Log in / Sign up</h2>
          </SheetTitle>
          <SheetDescription>
            <div>
              <div className="mb-6 border bg-white border-zinc-200 rounded-xl">
                <div className="flex justify-center">
                  <div className="w-full h-[100px] relative">
                    <Image
                      src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/unauthd-asset.png"
                      alt="Mushroom"
                      fill
                    />
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-lg text-textColor font-medium mb-2">
                    With a free account, you can
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white font-bold py-2 rounded-lg mb-2 hover:bg-red-700">
                Log in
              </button>
              <button className="w-full border border-red-600 text-red-600 font-bold py-2 rounded-lg hover:bg-red-50">
                Sign up
              </button>

              <div className="mt-6 space-y-1.5">
                {extraLinks.map(({ label, external }, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-full flex items-center justify-between bg-white border rounded-lg px-4 py-2 text-sm hover:bg-gray-50 text-textColor hover:text-primary font-semibold "
                  >
                    {label}
                    {external && <span>↗</span>}
                  </a>
                ))}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default LoginSheet;
