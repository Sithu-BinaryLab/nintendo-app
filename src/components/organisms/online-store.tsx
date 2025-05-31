import Image from "next/image";
import React from "react";
import { Button } from "../atoms/button";

const OnlineStore = () => {
	return (
		<div className="">
			<div className="px-5 md:px-10 lg:px-16 ">
				<h1 className=" text-2xl font-semibold text-textColor mb-8">
					Online Store
				</h1>
				<div className="w-full relative h-[150px] sm:h-[200px]">
					<Image
						src={
							"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST"
						}
						alt="Online Store"
						fill
						className="rounded-xl"
					/>
				</div>
				<div className="mt-10 flex flex-wrap md:flex-nowrap items-center justify-between gap-10">
					<p className="text-lg sm:text-xl font-semibold text-textColor">
						Shop games, exclusive Nintendo merchandise, and more! Plus, get free
						shipping on orders $50 and over.
					</p>
					<Button
						size="lg"
						className="cursor-pointer !h-12 !text-lg transition-transform duration-200 hover:scale-105"
					>
						Start shopping
					</Button>
				</div>
			</div>
			<hr className="mt-16 mb-14" />
		</div>
	);
};

export default OnlineStore;
