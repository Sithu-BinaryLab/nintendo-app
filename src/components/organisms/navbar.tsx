import {
  CloudAlertIcon,
  HeartPlusIcon,
  MonitorCogIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";
import { IoShieldHalfSharp } from "react-icons/io5";
import { RiCompass3Line } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../atoms/navigation-menu";
import { Button } from "../atoms/button";
import { Tag, Star, Shirt, Gamepad2 } from "lucide-react";
import Link from "next/link";
import LoginSheet from "./login-sheet";
import SearchSheet from "./search-sheet";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      icon: <RiCompass3Line size={18} className="text-primary" />,
      title: "Explore",
      link: "/",
    },
    {
      id: 2,
      icon: <GiShoppingBag size={18} className="text-primary" />,
      title: "Shop",
      link: "/",
    },
    {
      id: 3,
      icon: <IoShieldHalfSharp size={18} className="text-primary" />,
      title: "Support",
      link: "/",
    },
  ];
  return (
    <div className="cursor-pointer flex items-center justify-between border-b border-zinc-200 relative">
      <div className="basis-1/2 flex items-center gap-4">
        <Link href={"/"} className="bg-primary py-4 px-6">
          <p className="rounded-xl border-2 text-sm border-white font-bold px-1 text-white">
            Nintendo
          </p>
        </Link>
        <div className="px-4 hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {navLinks[0].icon}
                  <p className="px-1">{navLinks[0].title}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!min-w-[800px] !left-0 -mt-[0.45rem]">
                  <ExploreContent />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {navLinks[1].icon}
                  <p className="px-1">{navLinks[1].title}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!min-w-[800px] !left-0 -mt-[0.45rem]">
                  <ShopContent />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {navLinks[2].icon}
                  <p className="px-1">{navLinks[2].title}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!min-w-[800px] !left-0 -mt-[0.45rem]">
                  <SupportContent />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-end gap-4 px-6">
        <div className="hidden lg:flex items-center justify-end gap-4">
          <SearchSheet />
          <Link
            href={
              "https://accounts.nintendo.com/authorize_guide?redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fresponse_type%3Dcode%2Bid_token%26client_id%3D01fe027acd6bc0cf%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26scope%3DeshopDemo%2BeshopDevice%2BeshopPrice%2BfamilyMember%2Bmission%253AanyClients%2BmissionStatus%253AanyClients%2BmissionStatus%253Aprogress%2Bopenid%2BparentalControlSetting%2BpointTransaction%2BpointWallet%2Buser%2Buser.birthday%2Buser.email%2Buser.membership%2Buser.mii%2Buser.wishlist%26state%3D6e98ced961a095ed67f5dcc3126e8aa4%26response_mode%3Dweb_message%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com%26web_message_target%3Dop-frame%26prompt%3Dconsent%26interacted%3D1&type=mixed"
            }
            target="_blank"
            className="bg-bgContainer px-3 py-2 rounded-full flex items-center justfy-center group"
          >
            <GoHeartFill
              size={18}
              className="text-textColor group-hover:text-primary"
            />
          </Link>
          <Link
            href={
              "https://accounts.nintendo.com/authorize_guide?redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fresponse_type%3Dcode%2Bid_token%26client_id%3D01fe027acd6bc0cf%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26scope%3DeshopDemo%2BeshopDevice%2BeshopPrice%2BfamilyMember%2Bmission%253AanyClients%2BmissionStatus%253AanyClients%2BmissionStatus%253Aprogress%2Bopenid%2BparentalControlSetting%2BpointTransaction%2BpointWallet%2Buser%2Buser.birthday%2Buser.email%2Buser.membership%2Buser.mii%2Buser.wishlist%26state%3D6e98ced961a095ed67f5dcc3126e8aa4%26response_mode%3Dweb_message%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com%26web_message_target%3Dop-frame%26prompt%3Dconsent%26interacted%3D1&type=mixed"
            }
            target="_blank"
            className="bg-bgContainer px-3 py-2 rounded-full flex items-center justfy-center group"
          >
            <FaCartShopping
              size={18}
              className="text-textColor group-hover:text-primary"
            />
          </Link>

          <LoginSheet />
        </div>
        <Link
          target="_blank"
          href={"https://www.nintendo.com/region-selector/"}
        >
          <Image src={"/images/en.png"} width={28} height={40} alt="EN" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

function ExploreContent() {
  const mainItems = [
    {
      title: "Nintendo Switch 2",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Nintendo-Switch-2",
      link: "https://www.nintendo.com/us/gaming-systems/switch-2/",
    },
    {
      title: "Nintendo Switch",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-alt",
      link: "https://www.nintendo.com/us/switch/",
    },
    {
      title: "Games",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Games",
      link: "https://www.nintendo.com/us/gaming-systems/switch-2/featured-games/",
    },
    {
      title: "Nintendo Switch Online",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-Online",
      link: "https://www.nintendo.com/us/online/",
    },
  ];

  const buttons = [
    {
      icon: "💬",
      label: "News and Events",
      link: "https://www.nintendo.com/us/whatsnew/",
    },
    {
      icon: "⭐",
      label: "Play Nintendo",
      link: "https://play.nintendo.com/?_gl=1*1idonzy*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMxNjEkajM0JGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "🧑‍💼",
      label: "My Nintendo",
      link: "https://my.nintendo.com/?_gl=1*1idonzy*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMxNjEkajM0JGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "📱",
      label: "Apps",
      link: "https://www.nintendo.com/us/mobile-apps/",
    },
  ];

  const characters = [
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Super-Mario",
      name: "Super Mario",
      link: "https://mario.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-The-Legend-of-Zelda",
      name: "The Legend of Zelda",
      link: "https://zelda.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Splatoon",
      name: "Splatoon",
      link: "https://splatoon.nintendo.com/base/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Kirby",
      name: "Kirby",
      link: "https://kirby.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Pikmin",
      name: "Pikmin",
      link: "https://pikmin.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Animal-Crossing",
      name: "Animal Crossing",
      link: "https://animalcrossing.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
    {
      icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Metroid",
      name: "Metroid",
      link: "https://metroid.nintendo.com/?_gl=1*von3qx*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTMzNDAkajYwJGwwJGgxMDM0MTU5MzUy",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-white !w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {mainItems.map((item, i) => (
          <Link href={item.link} key={i} className="space-y-2">
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={120}
              className="mx-auto"
            />
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((btn, i) => (
          <Link
            href={btn.link}
            key={i}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            <span className="text-xl">{btn.icon}</span>
            {btn.label}
          </Link>
        ))}
      </div>

      <div className="border-t pt-4">
        <h4 className="text-center font-semibold mb-2 text-gray-700">
          Meet the characters:
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {characters.map((char, i) => (
            <Link href={char.link} key={i} className="flex items-center gap-2">
              <Image src={char.icon} alt={char.name} width={28} height={28} />
              <span className="text-sm">{char.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    label: "Games",
    icon: <Gamepad2 className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/games/",
  },
  {
    label: "Hardware",
    icon: <Gamepad2 className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/hardware/",
  },
  {
    label: "Merchandise",
    icon: <Shirt className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/merchandise/",
  },
  {
    label: "Sales and Deals",
    icon: <Tag className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/sales-and-deals/",
  },
  {
    label: "Exclusives",
    icon: <Star className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/exclusives/",
  },
  {
    label: "Characters",
    icon: <UserIcon className="text-red-600" />,
    link: "https://www.nintendo.com/us/store/characters/",
  },
];

function ShopContent() {
  return (
    <div className="p-6 space-y-6 bg-white !w-full">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="bg-red-600 text-white rounded-2xl p-8 w-full md:w-1/3 text-center shadow-xl">
          <h1 className="text-3xl font-bold mb-2">My Nintendo Store</h1>
          <Button variant="link" className="text-white underline text-lg">
            Shop all
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
          {categories.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className="rounded-3xl bg-white border border-zinc-300 "
            >
              <div className="flex items-center gap-4 p-4">
                {item.icon}
                <span className="font-semibold text-gray-800 text-sm">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories2 = [
  {
    label: "My Support",
    icon: <HeartPlusIcon className="text-red-600" />,
    link: "https://mysupport.nintendo.com/?_gl=1*1sn56mq*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTM2ODIkajYwJGwwJGgxMDM0MTU5MzUy",
  },
  {
    label: "Switch Family",
    icon: <Gamepad2 className="text-red-600" />,
    link: "https://en-americas-support.nintendo.com/app/region/d/switch?_gl=1*1sn56mq*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTM2ODIkajYwJGwwJGgxMDM0MTU5MzUy",
  },
  {
    label: "Other Systems",
    icon: <MonitorCogIcon className="text-red-600" />,
    link: "https://en-americas-support.nintendo.com/app/region/d/other-systems?_gl=1*1sn56mq*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTM2ODIkajYwJGwwJGgxMDM0MTU5MzUy",
  },
  {
    label: "Account",
    icon: <UserIcon className="text-red-600" />,
    link: "https://en-americas-support.nintendo.com/app/region/d/account?_gl=1*1sn56mq*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTM2ODIkajYwJGwwJGgxMDM0MTU5MzUy",
  },
  {
    label: "Repair",
    icon: <CloudAlertIcon className="text-red-600" />,
    link: "https://en-americas-support.nintendo.com/app/region/d/repair?_gl=1*1sn56mq*_gcl_au*NTc1MTAzNTQ2LjE3NDM5MTg4NTc.*_ga*Nzc5Mjk2MjI2LjE3NDM5MTg4NjQ.*_ga_F6ERC4HMNZ*czE3NDg2OTE5OTAkbzYkZzEkdDE3NDg2OTM2ODIkajYwJGwwJGgxMDM0MTU5MzUy",
  },
];

function SupportContent() {
  return (
    <div className="p-6 space-y-6 bg-white !w-full">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="bg-red-600 text-white rounded-2xl p-8 w-full md:w-1/3 text-center shadow-xl">
          <h1 className="text-3xl font-bold mb-2">Support Home</h1>
          <Button variant="link" className="text-white underline text-lg">
            Get help now
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
          {categories2.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className="rounded-3xl bg-white border border-zinc-300 "
            >
              <div className="flex items-center gap-4 p-4">
                {item.icon}
                <span className="font-semibold text-gray-800 text-sm">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
