import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../atoms/sheet";
import { SearchIcon } from "lucide-react";

const SearchSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-bgContainer rounded-3xl py-[0.36rem] px-3 text-textColor flex items-center gap-2">
          <SearchIcon size={18} className="text-textColor" />
          <input
            placeholder="Search"
            className="outline-none placeholder:text-textColor font-medium w-[80px]"
          />
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle> </SheetTitle>
          <SheetDescription>
            <SearchContent />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;

import Image from "next/image";
import Link from "next/link";

const trendingTopics = [
  "Nintendo Switch 2",
  "Nintendo Switch 2 games",
  "Nintendo SAN FRANCISCO store",
  "How to buy Nintendo Switch 2",
  "Games on sale",
  "Free game updates for Nintendo Switch 2",
];

const topProducts = [
  {
    title: "Mario Kart™ World",
    category: "Games",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/f22a320bc343486087c8ca47514097ec_1024",
    platform: "switch2",
  },
  {
    title: "Donkey Kong™ Bananza",
    category: "Games",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch-2/70010000096809/589e27d4511c0058dfaaea2a213b77cc4d4d5ee4133f36b94763565bc2288557",
    platform: "switch2",
  },
  {
    title: "Nintendo Switch™ 2 Pro Controller",
    category: "Hardware",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%202/Controllers/Pro%20Controllers/123674-nintendo-switch-2-pro-controller-package-front-2000x2000",
    platform: "switch2",
  },
  {
    title: "Minecraft",
    category: "Games",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/f22a320bc343486087c8ca47514097ec_1024",
    platform: "switch2",
  },
];

function SearchContent() {
  return (
    <div className="h-[50%] bg-white cursor-pointer">
      <div className="flex items-center gap-4 -mx-6 -mt-6 mb-6">
        <Link href={"/"} className="bg-primary py-4 px-6">
          <p className="rounded-xl border-2 text-sm border-white font-bold px-1 text-white">
            Nintendo
          </p>
        </Link>
        <div className="flex border-b-2 border-red-600 items-center gap-1 relative">
          <SearchIcon size={16} className="text-primary" />
          <input
            type="text"
            placeholder="Search games, hardware, news, etc"
            className="w-[400px] outline-none py-1 px-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-textColor font-semibold mb-4">Trending topics</h3>
          <ul className="space-y-2 text-red-600">
            {trendingTopics.map((topic, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-textColor font-semibold mb-4">
            Top store products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-start border rounded-xl p-3 gap-4 "
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="rounded-md object-cover"
                  />
                  {/* <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-1 rounded-br">
                    {product.platform.toUpperCase()}
                  </div> */}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">{product.title}</p>
                  <p className="text-xs text-gray-600">➕ {product.category}</p>
                </div>
                <button className="text-red-600 text-xl">♡</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
