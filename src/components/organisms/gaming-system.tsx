import React from "react";
import { Button } from "../atoms/button";
import Image from "next/image";

const GamingSystem = () => {
	return (
		<div className="">
			<div className="px-5 md:px-10 lg:px-16 ">
				<h1 className="text-2xl font-semibold text-textColor mb-8">
					Gaming systems
				</h1>
				<div className="w-full relative h-[250px] md:h-[350px]">
					<Image
						src={
							"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/Gaming%20Systems%20banner/Nintendo%20Switch%202%20features/NCOM-Home-NS2-section-desktop"
						}
						alt="Online Store"
						fill
						className="rounded-xl"
					/>
				</div>
				<div className="mt-10 flex flex-wrap md:flex-nowrap items-center  gap-10">
					<p className="text-lg sm:text-xl font-semibold text-textColor">
						Shop games, Get to know the Nintendo Switch 2 system
					</p>
					<Button
						size="lg"
						className="cursor-pointer !h-12 !text-lg transition-transform duration-200 hover:scale-105"
					>
						Learn more
					</Button>
				</div>
			</div>
			<hr className="my-14" />
		</div>
	);
};

export default GamingSystem;
