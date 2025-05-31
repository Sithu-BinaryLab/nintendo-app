import Image from "next/image";
import Link from "next/link";
import React from "react";

const Characters = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Mario",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/mario-bg",
      name: "Super Mario™",
      link: "https://mario.nintendo.com/?_gl=1*vjg7u0*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM0ODQkajMkbDAkaDEzNzc4MTk5Mw..",
    },
    {
      id: 2,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_character",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/The%20Legend%20of%20Zelda/1600x1600_background_02",
      name: "The Legend of Zelda™",
      link: "https://zelda.nintendo.com/?_gl=1*1shaxt3*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM0ODQkajMkbDAkaDEzNzc4MTk5Mw..",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_character_v2",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/Ncom_CharacterRail_1600x1600_Splatoon_BG",
      name: "Splatoon™",
      link: "https://splatoon.nintendo.com/base/?_gl=1*1shaxt3*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM0ODQkajMkbDAkaDEzNzc4MTk5Mw..",
    },
    {
      id: 4,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby_BG",
      name: "Kirby™",
      link: "https://kirby.nintendo.com/?_gl=1*1shaxt3*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM0ODQkajMkbDAkaDEzNzc4MTk5Mw..",
    },
    {
      id: 5,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pikmin_v02",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pikmin_v02",
      name: "Pikmin™",
      link: "https://pikmin.nintendo.com/?_gl=1*xz40f*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM2MTQkajYwJGwwJGgxMzc3ODE5OTM.",
    },
    {
      id: 6,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-AnimalCrossing_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-AnimalCrossing",
      name: "Animal Crossing™",
      link: "https://animalcrossing.nintendo.com/?_gl=1*xz40f*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM2MTQkajYwJGwwJGgxMzc3ODE5OTM.",
    },
    {
      id: 7,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Metroid_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Metroid_v01",
      name: "Metroid™",
      link: "https://metroid.nintendo.com/?_gl=1*xz40f*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg3MDMxODUkbzckZzEkdDE3NDg3MDM2MTQkajYwJGwwJGgxMzc3ODE5OTM.",
    },
    {
      id: 8,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Character-Pokemon_v01",
      bg: "https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,h_300,w_300/dpr_2.0/ncom/en_US/merchandising/CREATIVE-1295-CharacterSection-Background-Pokemon_v01",
      name: "Pokémon™",
      link: "https://www.pokemon.com/us",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-16 py-10">
        <h1 className=" text-2xl font-semibold text-textColor mb-8">
          Characters
        </h1>
        <div className="flex flex-wrap items-center ">
          {data.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.id}
                className="group cursor-pointer mb-5 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4 h-max"
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
                <h1 className="text-lg sm:text-xl font-semibold text-textColor mt-3">
                  {item.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Characters;
