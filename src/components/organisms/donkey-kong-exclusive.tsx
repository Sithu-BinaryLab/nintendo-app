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
const DonkeyKongExclusive = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_1.5/ncom/My%20Nintendo%20Store/EN-US/Apparel/hoodies%20and%20jackets/donkey-kong-character-jacket-124429-1/124429-1-nintendo-donkey-kong-jacket-front-1200x675",
      gif: "https://www.fashionbeans.com/wp-content/uploads/2024/12/Intro2_CarharttDetroidJacketTIS.gif",
      title: "Donkey Kong Character Jacket",
      price: "$59.99",
    },
    {
      id: 2,
      img: "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_1.5/ncom/My%20Nintendo%20Store/EN-US/Apparel/T-Shirts/Donkey%20Kong/donkey-kong-deluxe-t-shirt-124423-1/124423-1-nintendo-donkey-kong-deluxe-t-shirt-front-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSmQamVI0Y6gkoYBQMY6vI_ZdMIFkwNuB_Q&s",
      title: "Donkey Kong Deluxe T-Shirt",
      price: "$29.99",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Collections/Donkey%20Kong%202025/donkey-kong-barrel-sling-124871/124871-nintendo-donkey-kong-barrel-duffel-front-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJot2U0z2lmeCWYKbR6CHqQxO9A0lKFqnPg&s",
      title: "Donkey Kong™ Barrel Sling",
      price: "$59.99",
    },
    {
      id: 4,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/ar_1.0,c_auto_pad,g_auto:thirds_0/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/Collections/Donkey%20Kong%202025/donkey-kong-banana-zip-pouch-124872/124872-nintendo-banana-zip-pouch-closed-1200x675",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGyMm2cQYAqxDQbjUmgmfaNefBdv7meONgQ&s",
      title: "Donkey Kong™ Banana Zip Pouch",
      price: "$60.28",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="flex items-center gap-5 mb-8">
          <h1 className=" text-2xl font-semibold text-textColor">
            Donkey Kong exclusives
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
                    <div className="relative w-full bg-white h-[250px] overflow-hidden">
                      <Image
                        src={item.img}
                        fill
                        className=" rounded-t-xl transition-all duration-300 ease-in-out group-hover:opacity-0 object-cover"
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

export default DonkeyKongExclusive;
