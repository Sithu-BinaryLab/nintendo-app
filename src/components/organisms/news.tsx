import { RssIcon, TagIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../atoms/button";

const News = () => {
	const headings = [
		{
			id: 1,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/my-nintendo-may-wrap-up-2025/NOA__News_WrapUp_Article_1920x1080-May2025_v1",
			title: "My Nintendo May Wrap-Up",
			text: "My Nintendo is gearing up for the launch of the Nintendo Switch™ 2 system on June 5! As we enter the final lap, let’s check out what’s new in the mon...",
		},
		{
			id: 2,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/articles/2025/heres-the-latest-nintendo-switch-online-news-from-may-2025/LHA-1634-NSO-MonthlyNewsletter-WebAsset-1920x1080-MAY_v01",
			title: "Here’s the latest Nintendo Switch Online news from May!",
			text: "Did you know? Active Nintendo Switch Online members have access to a trove of exclusive benefits like playing online in compatible games, exploring a collection of classic titles, saving with Nintendo Switch Game Vouchers*, and more! With the latest...",
		},
	];
	const blogs = [
		{
			id: 1,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/new-features-added-to-nintendo-today/NintendoToday_App",
			title: "New features added to Nintendo Today!",
		},
		{
			id: 2,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/find-out-which-games-are-getting-free-updates-for-nintendo-switch-2/1184x666_freePatches_EN",
			title:
				"Find out which games are getting free updates for Nintendo Switch 2!",
		},
		{
			id: 3,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/see-whats-new-in-the-super-mario-party-jamboree-nintendo-switch-2-edition-jamboree-tv-game/Switch2_SMPJ-NS2_OverviewTRL",
			title:
				"See what’s new in the Super Mario Party Jamboree - Nintendo Switch 2 Edition + Jamboree TV game!",
		},
		{
			id: 4,
			img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/retail-offers/2025/NS2-MKW-GameTruckEvent/NS2_MKW_GameTruck-1920x1080",
			title:
				"Play the Mario Kart World game with GameTruck at your local Best Buy",
		},
	];
	return (
		<div>
			<div className="px-5 md:px-10 lg:px-16 pb-10">
				<h1 className=" text-2xl font-semibold text-textColor mb-8">News</h1>
				<div className="flex flex-wrap md:flex-nowrap items-stretch gap-10">
					{headings.map((item) => {
						return (
							<div
								key={item.id}
								className="group basis-1/1 md:basis-1/2 cursor-pointer"
							>
								<div className="relative w-full h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-zinc-300">
									<Image
										alt="New Image"
										src={item.img}
										fill
										className="group-hover:scale-105 transition-all ease-in-out duration-200"
									/>
								</div>
								<div className="flex items-center gap-2 mt-6 mb-4">
									<TagIcon className="text-primary" />
									<p>{new Date().toLocaleDateString()}</p>
								</div>
								<h1 className="mb-5 text-lg font-semibold text-textColor group-hover:text-primary ">
									{item.title}
								</h1>
								<p className="line-clamp-2">{item.text}</p>
								<p className="mt-2 text-primary pb-0.5 font-semibold border-b-2 border-primary w-max">
									Read more
								</p>
							</div>
						);
					})}
				</div>
				<div className="flex flex-wrap md:flex-nowrap items-stretch gap-10 mt-10">
					{blogs.map((item) => {
						return (
							<div
								key={item.id}
								className="group basis-1/1 sm:basis-1/2  lg:basis-1/4 cursor-pointer"
							>
								<div className="relative w-full h-[150px] rounded-xl overflow-hidden border border-zinc-300">
									<Image
										alt="New Image"
										src={item.img}
										fill
										className="group-hover:scale-105 transition-all ease-in-out duration-200"
									/>
								</div>
								<div className="flex items-center gap-2 mt-4 mb-2">
									<TagIcon className="text-primary" />
									<p>{new Date().toLocaleDateString()}</p>
								</div>
								<h1 className="mb-5 text-base font-semibold text-textColor group-hover:text-primary line-clamp-3">
									{item.title}
								</h1>
								<p className="mt-2 text-primary pb-0.5 font-semibold border-b-2 border-primary w-max">
									Read more
								</p>
							</div>
						);
					})}
				</div>
				<Button
					size="lg"
					className="cursor-pointer !h-12 !text-lg transition-transform duration-200 hover:scale-105 mt-10"
				>
					<RssIcon /> See all new articles
				</Button>
			</div>
			<hr />
		</div>
	);
};

export default News;
