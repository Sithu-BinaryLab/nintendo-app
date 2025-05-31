import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../atoms/carousel";
import Image from "next/image";
import { Badge } from "../atoms/badge";
import { AtomIcon, HeartIcon } from "lucide-react";
const MultiplayerAccessories = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Controllers/rematch-wireless-controller-glow-super-mario-star-120766/120766-pdp-nintendo-switch-rematch-wireless-controller-glow-star-front-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCrt6Ppv4yY_kIkUpR_eKo_h76gPCwNJkIA&s",
      title: "REMATCH Wireless Controller Glow: Super Mario™ Star",
      price: "$59.99",
    },
    {
      id: 2,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Cases/nintendo-switch-travel-case-glow-super-star-120767/120767-pdp-nintendo-switch-travel-case-super-mario-star-front-1200x675",
      gif: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Cases/nintendo-switch-travel-case-glow-super-star-120767/120767-pdp-nintendo-switch-travel-case-super-mario-star-top-angle-glow-1200x675",
      title: "Nintendo Switch™ Travel Case Glow - Super Star",
      price: "$29.99",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Controllers/rematch-wireless-controller-glow-super-mario-icon-120765/120765-pdp-nintendo-switch-rematch-wireless-controller-red-checkered-gid-front-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJmN9QbzwLQcnAOZX0HpiDdPuO6x4qUP3zw&s",
      title: "REMATCH Wireless Controller Glow: Super Mario™ Icon",
      price: "$59.99",
    },
    {
      id: 4,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Accessories/Cases/nintendo-switch-travel-case-glow-mario-icon-120764/120764-pdp-nintendo-switch-travel-case-mario-icon-front-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSmgdzS0z4kUe5e-5sTpIKSCFQ8ifzEbM7A&s",
      title: "REMATCH Wireless Controller Glow: Super Mario™ Icon",
      price: "$60.28",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="flex items-center gap-5 mb-8">
          <h1 className=" text-2xl font-semibold text-textColor">
            Multiplayer Accessories
          </h1>
          <div className="h-5 w-0.5 bg-gray-300"></div>
          <p className="text-primary pb-0.5 font-semibold border-b-2 border-primary w-max my-auto">
            see full list
          </p>
        </div>
        <Carousel>
          <CarouselContent className="px-10">
            {[...data, ...data, ...data].map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className=" basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4  px-4"
                >
                  <div className="border rounded-xl border-zinc-300 group overflow-hidden cursor-pointer h-full">
                    <div className="relative w-full h-[250px] bg-white overflow-hidden">
                      <Image
                        src={item.img}
                        fill
                        className=" rounded-t-xl transition-all duration-300 ease-in-out group-hover:opacity-0"
                        alt="Game cover"
                      />
                      <Image
                        src={item.gif}
                        fill
                        className="object-contain rounded-t-xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                        alt="Hover animation"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-base mb-3 text-textColor font-semibold">
                        {item.title}
                      </p>
                      <p className="text-textColor text-sm">
                        {new Date().toLocaleDateString()}
                      </p>
                      <Badge className="bg-primary my-2">New!</Badge>
                      <p className="text-base mb-3 text-textColor font-semibold">
                        {item.price}
                      </p>
                      <div className="flex items-center justify-between group2">
                        <div className="flex items-center gap-1">
                          <AtomIcon className="text-primary text-sm" />
                          <p className="text-sm text-textColor">Games</p>
                        </div>

                        <div>
                          <HeartIcon className="text-red-600 w-6 h-6 relative z-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MultiplayerAccessories;
