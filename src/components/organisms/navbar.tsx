import {
	CloudAlertIcon,
	HeartPlusIcon,
	MonitorCogIcon,
	SearchIcon,
	UserIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
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
		<div className="cursor-pointer flex items-center justify-between border-b border-zinc-200">
			<div className="basis-1/2 flex items-center gap-4">
				<div className="bg-primary py-4 px-6">
					<p className="rounded-xl border-2 text-sm border-white font-bold px-1 text-white">
						Nintendo
					</p>
				</div>
				<div className="px-4 flex items-center gap-4">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									{navLinks[0].icon}
									{navLinks[0].title}
								</NavigationMenuTrigger>
								<NavigationMenuContent className="!min-w-[800px] !left-0 ">
									<ExploreContent />
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									{navLinks[1].icon}
									{navLinks[1].title}
								</NavigationMenuTrigger>
								<NavigationMenuContent className="!min-w-[1000px] !left-0 ">
									<ShopContent />
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									{navLinks[2].icon}
									{navLinks[2].title}
								</NavigationMenuTrigger>
								<NavigationMenuContent className="!min-w-[1000px] !left-0 ">
									<SupportContent />
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
			<div className="basis-1/2 flex items-center justify-end gap-4 px-6">
				<div className="bg-bgContainer rounded-3xl py-[0.36rem] px-3 text-textColor flex items-center gap-2">
					<SearchIcon size={18} className="text-textColor" />
					<input
						placeholder="Search"
						className="outline-none placeholder:text-textColor font-medium w-[80px]"
					/>
				</div>
				<div className="bg-bgContainer px-3 py-2 rounded-full flex items-center justfy-center group">
					<GoHeartFill
						size={18}
						className="text-textColor group-hover:text-primary"
					/>
				</div>
				<div className="bg-bgContainer px-3 py-2 rounded-full flex items-center justfy-center group">
					<FaCartShopping
						size={18}
						className="text-textColor group-hover:text-primary"
					/>
				</div>
				<div className="group">
					<div className="py-1 px-3 rounded-3xl flex items-center gap-3 border border-primary  group-hover:bg-primary">
						<FaUser className="text-primary group-hover:text-white" />
						<p className="text-base font-semibold text-primary group-hover:text-white">
							Log in / Sign up
						</p>
					</div>
				</div>
				<Image src={"/images/en.png"} width={28} height={40} alt="EN" />
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
		},
		{
			title: "Nintendo Switch",
			image:
				"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-alt",
		},
		{
			title: "Games",
			image:
				"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Games",
		},
		{
			title: "Nintendo Switch Online",
			image:
				"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-Online",
		},
	];

	const buttons = [
		{ icon: "💬", label: "News and Events" },
		{ icon: "⭐", label: "Play Nintendo" },
		{ icon: "🧑‍💼", label: "My Nintendo" },
		{ icon: "📱", label: "Apps" },
	];

	const characters = [
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Super-Mario",
			name: "Super Mario",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-The-Legend-of-Zelda",
			name: "The Legend of Zelda",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Splatoon",
			name: "Splatoon",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Kirby",
			name: "Kirby",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Pikmin",
			name: "Pikmin",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Animal-Crossing",
			name: "Animal Crossing",
		},
		{
			icon: "https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Metroid",
			name: "Metroid",
		},
	];

	return (
		<div className="p-6 space-y-6 bg-white !w-full">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
				{mainItems.map((item, i) => (
					<div key={i} className="space-y-2">
						<Image
							src={item.image}
							alt={item.title}
							width={120}
							height={120}
							className="mx-auto"
						/>
						<h3 className="font-semibold text-lg">{item.title}</h3>
					</div>
				))}
			</div>

			<div className="flex flex-wrap justify-center gap-4">
				{buttons.map((btn, i) => (
					<button
						key={i}
						className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
					>
						<span className="text-xl">{btn.icon}</span>
						{btn.label}
					</button>
				))}
			</div>

			<div className="border-t pt-4">
				<h4 className="text-center font-semibold mb-2 text-gray-700">
					Meet the characters:
				</h4>
				<div className="flex flex-wrap justify-center gap-4">
					{characters.map((char, i) => (
						<div key={i} className="flex items-center gap-2">
							<Image src={char.icon} alt={char.name} width={28} height={28} />
							<span className="text-sm">{char.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const categories = [
	{ label: "Games", icon: <Gamepad2 className="text-red-600" /> },
	{ label: "Hardware", icon: <Gamepad2 className="text-red-600" /> },
	{ label: "Merchandise", icon: <Shirt className="text-red-600" /> },
	{ label: "Sales and Deals", icon: <Tag className="text-red-600" /> },
	{ label: "Exclusives", icon: <Star className="text-red-600" /> },
	{ label: "Characters", icon: <UserIcon className="text-red-600" /> },
];

function ShopContent() {
	return (
		<div className="p-8 min-h-max">
			<div className="flex flex-col md:flex-row items-center gap-4">
				<div className="bg-red-600 text-white rounded-2xl p-8 w-full md:w-1/3 text-center shadow-xl">
					<h1 className="text-3xl font-bold mb-2">My Nintendo Store</h1>
					<Button variant="link" className="text-white underline text-lg">
						Shop all
					</Button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
					{categories.map((item) => (
						<div
							key={item.label}
							className="rounded-3xl bg-white border border-zinc-300 "
						>
							<div className="flex items-center gap-4 p-4">
								{item.icon}
								<span className="font-semibold text-gray-800 text-sm">
									{item.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const categories2 = [
	{ label: "My Support", icon: <HeartPlusIcon className="text-red-600" /> },
	{ label: "Switch Family", icon: <Gamepad2 className="text-red-600" /> },
	{ label: "Other Systems", icon: <MonitorCogIcon className="text-red-600" /> },
	{ label: "Account", icon: <UserIcon className="text-red-600" /> },
	{ label: "Repair", icon: <CloudAlertIcon className="text-red-600" /> },
];

function SupportContent() {
	return (
		<div className="p-8 min-h-max">
			<div className="flex flex-col md:flex-row items-center gap-4">
				<div className="bg-red-600 text-white rounded-2xl p-8 w-full md:w-1/3 text-center shadow-xl">
					<h1 className="text-3xl font-bold mb-2">Support Home</h1>
					<Button variant="link" className="text-white underline text-lg">
						Get help now
					</Button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-2/3">
					{categories2.map((item) => (
						<div
							key={item.label}
							className="rounded-3xl bg-white border border-zinc-300 "
						>
							<div className="flex items-center gap-4 p-4">
								{item.icon}
								<span className="font-semibold text-gray-800 text-sm">
									{item.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
