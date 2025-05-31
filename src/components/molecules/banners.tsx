"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/bannerIcon1.png",
  "/images/bannerIcon2.png",
  "/images/bannerIcon3.png",
  "/images/bannerIcon4.png",
];

const bannerImgs = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png",
];

const duration = 5000;

export default function Banners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        setAnimateKey((prevKey) => prevKey + 1);
        return next;
      });
    }, duration);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setAnimateKey((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      <div
        key={animateKey}
        className="w-full h-auto overflow-hidden mb-6 animate-fade-slide-in"
      >
        <img
          src={bannerImgs[activeIndex]}
          alt={`Banner ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        key={animateKey + "-text"}
        className="mb-6 px-4 md:px-10 flex flex-wrap md:flex-nowrap items-center justify-between w-full animate-fade-slide-in"
      >
        <h1 className="md:basis-2/3 text-lg sm:text-xl  md:text-2xl text-textColor font-bold">
          Start your engines and race across a sprawling world!
        </h1>
        <div className="mt-2 md:mt-0 md:basis-1/3 flex items-center justify-end gap-3">
          <Image
            src={"/images/banner.png"}
            width={50}
            height={120}
            alt="Banner Content"
          />
          <div className="flex flex-col gap-1 text-sm sm:text-base">
            <p>Mild Fantasy Violence</p>
            <hr />
            <p>Users Interact</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-14 h-14  rounded-xl cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <Image
              src={src}
              fill
              alt={`Thumb ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {index === activeIndex && (
              <div
                className={`border-progress active ${
                  index === images.length - 1 ? "border-goldenrod" : ""
                }`}
              >
                <div className="left-top"></div>
                <div className="left-bottom"></div>
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="right-top"></div>
                <div className="right-bottom"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
