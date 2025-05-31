import Image from "next/image";
import React from "react";

const ShopByCharacters = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/mario-bg",
      name: "Super Mario™",
    },
    {
      id: 2,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_background_02",
      name: "The Legend of Zelda™",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_BG",
      name: "Splatoon™",
    },
    {
      id: 4,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby_BG",
      name: "Kirby™",
    },
    {
      id: 5,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pikmin_v02",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pikmin_v02",
      name: "Pikmin™",
    },
    {
      id: 6,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-AnimalCrossing_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-AnimalCrossing",
      name: "Animal Crossing™",
    },
    {
      id: 7,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Metroid_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Metroid_v01",
      name: "Metroid™",
    },
    {
      id: 8,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pokemon_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pokemon_v01",
      name: "Pokémon™",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <div className="flex items-center gap-5 mb-8">
          <h1 className=" text-2xl font-semibold text-textColor">
            Shop by character
          </h1>
          <div className="h-5 w-0.5 bg-gray-300"></div>
          <p className="text-primary pb-0.5 font-semibold border-b-2 border-primary w-max my-auto">
            see full list
          </p>
        </div>
        <div className="flex flex-wrap items-center">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="relative group cursor-pointer mb-5 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4 h-max"
              >
                <div
                  className="relative w-full h-[250px] rounded-xl overflow-hidden "
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    className="group-hover:scale-110 transition-all ease-in-out duration-200"
                    alt={item.name}
                    src={item.img}
                    fill
                  />
                </div>
                <h1 className="text-lg sm:text-xl font-semibold text-white bg-gray-800 px-4 py-2 rounded-full mt-3 absolute inset-x-0 opacity-75 w-40 mx-2 top-0 ">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ShopByCharacters;
