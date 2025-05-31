import Image from "next/image";
import React from "react";
import { Badge } from "../atoms/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../atoms/carousel";

const Featured = () => {
	const data = [
		{
			id: 1,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/nintendo-switch-2-to-be-released-in-2025/1920x1080_WN_PR01162025",
			title: "See what's new with the Nintendo Switch 2 system",
			text: "Hardware",
		},
		{
			id: 2,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/merchandising/feature-banner/2025/Nintendo%20Switch%202%20games%20PLP/1920x1080_NS2_Ncom_PDP-SalesDeals-FeatureBanner-OPT2",
			title: "Games coming to Nintendo Switch 2",
			text: "News and Events",
		},
		{
			id: 3,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/ask-the-developer-vol-18-mario-kart-world-part-1/16x9--NSwitch2-ask_the_Dev18-GB-en",
			title: "Ask the Developer Vol. 18: Mario Kart World",
			text: "Hardware",
		},
		{
			id: 4,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/retail-offers/2025/NS2-MKW-GameTruckEvent/NS2_MKW_GameTruck-1920x1080",
			title: "Play the Mario Kart World game with GameTruck at you",
			text: "News and Events",
		},
	];
	return (
		<section className=" pt-10">
			<h1 className="px-5 md:px-10 lg:px-16 text-2xl font-semibold text-textColor mb-8">
				Featured
			</h1>
			<Carousel>
				<CarouselContent className="px-4 md:px-10">
					{[...data, ...data, ...data].map((item, index) => {
						return (
							<CarouselItem
								key={index}
								className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4"
							>
								<div className=" border rounded-xl border-zinc-300 group overflow-hidden cursor-pointer">
									<div className="relative w-full h-[180px] overflow-hidden">
										<Image
											src={item.img}
											fill
											className="group-hover:scale-110 rounded-t-xl transition-all ease-in-out duration-200"
											alt="Featured Image"
										/>
									</div>
									<div className="p-4">
										<p className="text-base mb-3 text-textColor font-semibold">
											{item.title}
										</p>
										<Badge className="bg-active">Learn more</Badge>
										<div className="pl-2 my-4 border-l-2 border-active">
											<p className="text-sm font-medium">{item.text}</p>
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
			<hr className="mt-20 mb-16" />
		</section>
	);
};

export default Featured;
