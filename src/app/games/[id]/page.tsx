"use client";
import {
  Gamepad2,
  Truck,
  ChevronUp,
  ChevronDown,
  X,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define the Game type
interface Game {
  title: string;
  release: string;
  price: number;
  image: string;
}

export default function Games() {
  const games: Game[] = [
    {
      title: "Mario Kart™ World",
      release: "6/15/25",
      price: 79.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000095431/b664445df3f7a3765a760822d725ea1853bc6f43d2aa96ccee81d6f45cb281ef",
    },
    {
      title: "Donkey Kong™ Banana",
      release: "7/17/25",
      price: 69.99,
      image:
        "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_2.0/ncom/software/switch-2/70010000096809/be39c94ae1ba33ce9c2736cf7529fdcb9a9426c316a83deecde93e770cda2859",
    },
    {
      title: "The Legend of Zelda™: Breath of the Wild",
      release: "6/7/25",
      price: 59.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70050000057001/cfe9f8d674be958326d3ba11fc7598a4383e5c5d7809b6239ccac0783aac6cd8",
    },
    {
      title: "The Legend of Zelda™: Tears of the Kingdom",
      release: "6/7/25",
      price: 59.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70050000056960/f20258999e8d852a496dad2961a87faf2b119488f97fb81442f378043e58b000",
    },
    {
      title: "Super Mario Party™ Jamboree – Nintendo Switch™ 2",
      release: "7/24/25",
      price: 59.99,
      image:
        "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_2.0/ncom/software/switch-2/70050000056961/77bb03afb4c31b781d7d358c0fdf80575ac396a681f8bf7e448d2d966ed19ddd",
    },
    {
      title: "Kirby™ and the Forgotten Land – Nintendo Switch™ 2",
      release: "8/28/25",
      price: 19.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70050000056893/22d7ab5ddcaa1a9e76f66aa649c723604ff913487a7f1dd542d91ae82301187a",
    },
    {
      title: "Nintendo Switch™ 2 Welcome Tour",
      release: "6/7/25",
      price: 19.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000096813/8a2fc51b02035bf067a473a66938322f1f1570bf21034f0ad2134ce93b0d1cac",
    },
    {
      title: "Hogwarts Legacy",
      release: "5/25",
      price: 59.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000095417/1474ec0ae203ee7a392f89ad9cf9d630b7f2d13b1300c65d27e435a607c0bda5",
    },
    {
      title: "Hogwarts Legacy: Digital Deluxe Edition",
      release: "6/5/25",
      price: 69.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70070000027672/174545ceaee13785f7e73dc9dac60bf7d8e17f510170192a84a9136ae188920d",
    },
    {
      title: "Split Fiction",
      release: "5/25",
      price: 49.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000097434/6de085f1efb6c90b754e383fe810f3cb0e847105bb584c706f4cd3b5c66491f4",
    },
    {
      title: "Cyberpunk 2077: Ultimate Edition",
      release: "6/25",
      price: 69.99,
      image:
        "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_2.0/ncom/software/switch-2/70010000095547/fafb315be0e638d33a11c745f03d13eca2cc8d9951bb024afaea58ce4a9b38d5",
    },
    {
      title: "EA SPORTS™ Madden NFL 26",
      release: "8/14/25",
      price: 69.99,
      image:
        "https://assets.nintendo.com/image/upload/q_auto:eco/f_auto/dpr_2.0/ncom/software/switch-2/70010000095298/a36a0fca14779bfe5c2824457577a27e7dd66fa22743f6462930186c4d5dd56a",
    },
    {
      title: "Street Fighter™ 6 Years 1-2 Fighters Edition",
      release: "6/5/25",
      price: 59.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000096859/fa432f9f3dd428f43925fae2a9e7d6f30f23c396b3cbb3e0a53cb8c84e57b1d1",
    },
    {
      title: "Bravely Default Flying Fairy HD Remaster",
      release: "6/5/25",
      price: 39.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70070000027440/e36b172d84d33306a6f7b75b5eb884fe815ea2f79ca76de1b815cf008792b0f7",
    },
    {
      title: "Fortnite",
      release: "6/25",
      price: 0.0,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000095321/9d983eab161d222de28c91f2b66bcf3686f12281ffc0a9632ecd36984de09931",
    },
    {
      title: "DELTARUNE",
      release: "5/25",
      price: 24.99,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch-2/70010000096855/f26fc9e1b11ce01369966ed9225e320a293c4eaad1329774f125e05629ffd437",
    },
  ];

  // Define the Filters type
  interface Filters {
    deals: boolean;
    dlc: boolean;
    nso: boolean;
    platform: boolean;
    availability: boolean;
  }

  const [filters, setFilters] = useState<Filters>({
    deals: false,
    dlc: false,
    nso: true, // Start with this section expanded
    platform: false,
    availability: false,
  });

  const [sortOption, setSortOption] = useState<string>("Featured");

  const toggleFilter = (section: keyof Filters) => {
    setFilters((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sortGames = (option: string, games: Game[]): Game[] => {
    const sortedGames = [...games];
    switch (option) {
      case "Release date":
        sortedGames.sort((a, b) => {
          const dateA = new Date(a.release.split("/").reverse().join("-"));
          const dateB = new Date(b.release.split("/").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "Title (A-Z)":
        sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Title (Z-A)":
        sortedGames.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price (high to low)":
        sortedGames.sort((a, b) => b.price - a.price);
        break;
      case "Price (low to high)":
        sortedGames.sort((a, b) => a.price - b.price);
        break;
      default:
        // Featured (no sorting, keep original order)
        break;
    }
    return sortedGames;
  };

  return (
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
            <span>Redeem your My Nintendo Platinum Points for fun rewards</span>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <div className="bg-red-600 flex items-center justify-between p-8 h-80 w-full">
        {/* Left Section: Text */}
        <div className="bg-[#3A1A1A] p-8 rounded-lg w-1/2">
          <h1 className="text-white text-3xl font-bold mb-4">
            Coming to Nintendo Switch 2
          </h1>
          <p className="text-white text-lg">
            Check out these upcoming games for Nintendo Switch™ 2—pre-order now!
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_700/dpr_2.0/ncom/en_US/merchandising/curated%20list/Coming%20soon%20NS2/2400x1200_NS2_Ncom_PLPHeader-OPT2"
            alt="Nintendo Switch 2"
            width={700}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 text-gray-600 text-sm py-4 pl-4">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/my-nintendo-store">My Nintendo Store</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/games">Games</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/coming-to-nintendo-switch-2">
          Coming to Nintendo Switch 2
        </Link>
      </div>

      {/* Game Grid Section */}
      <div className="flex p-4 bg-gray-100">
        {/* Sidebar: Filters */}
        <div className="w-1/4 p-4 bg-gray-200 rounded-lg shadow-md">
          <div className="bg-white p-5 rounded-md">
            <div className="flex justify-center items-center mb-4">
              <button className="text-blue-600 font-semibold flex items-center">
                <X className="w-4 h-4 mr-1" /> Clear all
              </button>
            </div>
            <div className="border-b">
              <button
                onClick={() => toggleFilter("deals")}
                className="flex justify-between items-center w-full text-left font-bold mb-2"
              >
                Deals
                {filters.deals ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {filters.deals && (
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2 w-6 h-6" /> Deals (1)
                </label>
              )}
            </div>
            <div className="border-b">
              <button
                onClick={() => toggleFilter("dlc")}
                className="flex justify-between items-center w-full text-left font-bold mb-2"
              >
                DLC
                {filters.dlc ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {filters.dlc && (
                <>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 w-6 h-6" /> DLC (1)
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 w-6 h-6" /> Games
                    with DLC (3)
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 w-6 h-6" /> Upgrade
                    pack (6)
                  </label>
                </>
              )}
            </div>
            <div className="border-b">
              <button
                onClick={() => toggleFilter("nso")}
                className="flex justify-between items-center w-full text-left font-bold mb-2"
              >
                Nintendo Switch Online features
                {filters.nso ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {filters.nso && (
                <div className="border-b">
                  <button
                    onClick={() => toggleFilter("platform")}
                    className="flex justify-between items-center w-full text-left font-bold mb-2"
                  >
                    Platform
                    {filters.platform ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {filters.platform && (
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2 w-6 h-6" />{" "}
                      Nintendo Switch 2 (31)
                    </label>
                  )}
                </div>
              )}
            </div>
            <div className="border-b">
              <button
                onClick={() => toggleFilter("platform")}
                className="flex justify-between items-center w-full text-left font-bold mb-2"
              >
                Platform
                {filters.platform ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {filters.platform && (
                <label className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2 w-6 h-6" /> Nintendo
                  Switch 2 (31)
                </label>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleFilter("availability")}
                className="flex justify-between items-center w-full text-left font-bold mb-2"
              >
                Availability
                {filters.availability ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content: Game Grid */}
        <div className="w-3/4 pl-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Coming to Nintendo Switch 2
            </h2>
            <div className="relative">
              <select
                className="border rounded p-2 text-gray-700 bg-gray-200 appearance-none pr-8"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Featured">Featured</option>
                <option value="Release date">Release date</option>
                <option value="Title (A-Z)">Title (A-Z)</option>
                <option value="Title (Z-A)">Title (Z-A)</option>
                <option value="Price (high to low)">Price (high to low)</option>
                <option value="Price (low to high)">Price (low to high)</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sortGames(sortOption, games).map((game, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={300}
                    height={150}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    NS2
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{game.title}</h3>
                  <p className="text-sm text-gray-600">
                    Releases {game.release}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Pre-order now
                      </button>
                      <p className="text-lg font-bold mt-1">
                        ${game.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-600">+Games</p>
                    </div>
                    <button className="text-red-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
