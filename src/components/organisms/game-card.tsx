import Link from "next/link";
import AnimatedButton from "./article-button";

interface GameCardProps {
  image: string;
  title: string;
  price: string;
  platform: string;
}

export default function GameCard({
  image,
  title,
  price,
  platform,
}: GameCardProps) {
  return (
    <div className="bg-white rounded-lg items-center shadow overflow-hidden flex mb-4 p-8">
      <div className="w-1/5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-3/5 p-4 flex flex-col justify-between">
        <div>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600">{price}</p>
            <p className="text-gray-500">{platform}</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="text-red-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatedButton text="Learn more" variant="red" />
    </div>
  );
}
