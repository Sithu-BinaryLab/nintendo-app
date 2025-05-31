import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Monitor, Shirt, Star, User, Tag, Truck } from "lucide-react";
import StoreNewRelease from "@/components/organisms/store-news";
import ShopByCharacters from "@/components/organisms/shop-by-character";
import DonkeyKongExclusive from "@/components/organisms/donkey-kong-exclusive";
import MultiplayerAccessories from "@/components/organisms/multiplayer-accessories";
import SupportCards from "@/components/organisms/support-cards";

export default function Home() {
  return (
    <>
      <head>
        <title>My Nintendo Store – Nintendo Official Site</title>
        <meta
          name="description"
          content="Shop at the My Nintendo Store for exclusive Nintendo merchandise, video games in digital and physical formats, Nintendo Switch™ systems, and much more."
        />
        <meta
          property="og:title"
          content="My Nintendo Store – Nintendo Official Site"
        />
        <meta
          property="og:description"
          content="Shop at the My Nintendo Store for exclusive Nintendo merchandise, video games in digital and physical formats, Nintendo Switch™ systems, and much more"
        />
        <meta
          property="og:image"
          content="https://assets.nintendo.com/image/upload/v1643742733/ncom/global/social-share.jpg"
        />
        <meta property="og:url" content="https://www.nintendo.com/us/" />
      </head>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b-4 border-red-600">
          <div className="max-w-7xl mx-auto py-2 px-4 flex justify-center items-center text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-red-600" />
              <span>
                Free shipping on orders $50 or more. Restrictions apply.
              </span>
            </div>
            <div className="mx-4 text-gray-400">|</div>
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-5 h-5 text-red-600" />
              <span>
                Redeem your My Nintendo Platinum Points for fun rewards
              </span>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="relative bg-red-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold">☁️</div>
                <h1 className="text-4xl font-bold">My Nintendo Store</h1>
              </div>
              <h2 className="text-5xl font-extrabold">NINTENDO SWITCH™ 2</h2>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Image
                src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/dpr_2.0/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/2025/may/MNS-NS2-Billboard_v01"
                alt="Nintendo Switch 2"
                width={750}
                height={450}
                className="object-contain"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-6">
            <div className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center">
              <span className="text-xl font-semibold text-[#242424]">
                Check out these upcoming games for Nintendo Switch 2
              </span>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Pre-order now
              </button>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { title: "Games", icon: Gamepad2, color: "text-red-600" },
              { title: "Hardware", icon: Monitor, color: "text-red-600" },
              { title: "Merchandise", icon: Shirt, color: "text-red-600" },
              { title: "Store", icon: Star, color: "text-red-600" },
              { title: "Characters", icon: User, color: "text-red-600" },
              { title: "Sales", icon: Tag, color: "text-red-600" },
            ].map((category, index) => (
              <Link
                href={`/${category.title.toLowerCase().replace(" & ", "-")}`}
                key={index}
              >
                <div className="bg-white px-8 py-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition">
                  <h3 className="mt-2 text-center text-xl font-semibold text-[#242424] pb-2">
                    {category.title}
                  </h3>
                  <category.icon className={`w-20 h-20 ${category.color}`} />
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* New Promotional Section */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: LEGO Super Mario Mario Kart */}
            <div className="rounded-lg overflow-hidden flex flex-col items-center p-4">
              <div className="relative w-60 h-60">
                <Image
                  src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/2025/may/CREATIVE-1942-MNS-HomepageRequests-LEGO-Spotlight-MarioKart_v02"
                  alt="LEGO Super Mario Mario Kart"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-red-600"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-xl font-semibold text-[#242424]">
                  Gear up for a creative adventure with LEGO® Super Mario™ Mario
                  Kart™
                </p>
              </div>
            </div>

            {/* Card 2: Mario Kart World */}
            <div className="rounded-lg  overflow-hidden flex flex-col items-center p-4">
              <div className="relative w-60 h-60">
                <Image
                  src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/2025/may/CREATIVE-1933-MNS-MarioKartWorld-Spotlight"
                  alt="Mario Kart World"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-red-600"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-xl font-semibold text-[#242424]">
                  Ready your wheels for Mario Kart World, exclusively for the
                  Nintendo Switch™ 2 system
                </p>
              </div>
            </div>

            {/* Card 3: Happy Birthday Tom Nook */}
            <div className=" rounded-lg  overflow-hidden flex flex-col items-center p-4">
              <div className="relative w-60 h-60">
                <Image
                  src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/2025/may/CREATIVE-1942-MNS-HomepageRequests-Spotlight-AC-TomNook"
                  alt="Happy Birthday Tom Nook"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-cyan-400"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-xl font-semibold text-[#242424]">
                  Happy birthday Tom Nook!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* News Release */}
        <StoreNewRelease />
        <DonkeyKongExclusive />
        <MultiplayerAccessories />
        {/* Explore Collections Section */}
        <section className="bg-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                Explore collections
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Nintendo Switch",
                  "Exclusives",
                  "Under $20",
                  "Top picks: Games",
                  "Retro collection",
                  "It's Peach time!",
                ].map((collection, index) => (
                  <Link
                    href={`/collections/${collection
                      .toLowerCase()
                      .replace(" ", "-")
                      .replace(":", "")}`}
                    key={index}
                  >
                    <button className="text-red-700 text-xl px-6 py-2 rounded-full border-2 border-red-700 hover:bg-red-700 transition hover:text-white">
                      {collection}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Two Rewards */}
        <div className="grid grid-cols-2 gap-5 px-4 py-4">
          <div>
            <Image
              src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/MNR/CREATIVE-1494-MNS-JuneContentRequest-2400x1350-MyNintendo_v01"
              alt="My Nintendo rewards"
              width={700}
              height={394}
            />
            <p className="text-center text-gray-700 text-xl font-semibold pt-2">
              My Nintendo rewards
            </p>
          </div>
          <div>
            <Image
              src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/2025/may/PNG_Derivative-CLOS_001_USmode08_01_R_ad-0"
              alt="Nintendo Sound Clock: Alarmo™"
              width={700}
              height={394}
            />
            <p className="text-center text-gray-700 text-xl font-semibold pt-2">
              Wake up your way with Nintendo Sound Clock: Alarmo™
            </p>
          </div>
        </div>
        {/* Characters */}
        <ShopByCharacters />
        {/* Support Cards */}
        <SupportCards />
      </div>
    </>
  );
}
