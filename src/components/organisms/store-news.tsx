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

const StoreNewRelease = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/6d1be00348d241d59c6b3dcdcb818c78_1024",
      gif: "https://c.tenor.com/E48NFDcLvPoAAAAd/tenor.gif",
      title: "FANTASY LIFE i: The Girl Who Steals Time",
      price: "$59.99",
    },
    {
      id: 2,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/235aa9237a344669acb379e446366230_1024",
      gif: "https://media.tenor.com/sF_IlkYCPAcAAAAM/regal%27s-models-minecraft-cpm.gif",
      title: "Minecraft",
      price: "$29.99",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/1090fdd9c2684dd195c364a83ae45361_1024",
      gif: "https://media.tenor.com/InkHc9YhvWkAAAAM/doom-doom-slayer.gif",
      title: "DOOM",
      price: "$59.99",
    },
    {
      id: 4,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/58ef49c8ac0847eda11e41dee3d3f2f1_1024",
      gif: "https://media.tenor.com/-gh8QqcNQT8AAAAM/ea-sports-fifa-trailer-active-touch.gif",
      title: "EA Sports FAM25",
      price: "$60.28",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="flex items-center gap-5 mb-8">
          <h1 className=" text-2xl font-semibold text-textColor">
            New releases
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
                    <div className="relative w-full h-[250px] overflow-hidden">
                      <Image
                        src={item.img}
                        fill
                        className=" rounded-t-xl transition-all duration-300 ease-in-out group-hover:opacity-0"
                        alt="Game cover"
                      />
                      <Image
                        src={item.gif}
                        fill
                        className="object-cover rounded-t-xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
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

export default StoreNewRelease;
