import Link from "next/link";

interface ArticleCardProps {
  id: string;
  image?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  bannerText?: string;
  hasImageBanner: boolean;
}

export default function ArticleCard({
  id,
  image,
  date,
  category,
  title,
  description,
  bannerText,
  hasImageBanner,
}: ArticleCardProps) {
  return (
    <Link
      href={`/whatsnew/${id}`}
      className="bg-white rounded-lg shadow overflow-hidden border border-gray-200"
    >
      {hasImageBanner ? (
        <div className="flex">
          <div className="w-3/3">
            <img
              src={image}
              alt="Article banner"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      ) : (
        <div className="bg-red-500 p-4 text-white">
          <h2 className="text-xl font-bold whitespace-pre-line">
            {bannerText}
          </h2>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1">
            <span className="text-red-500 font-semibold">{date}</span>
          </span>
        </div>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <button className="text-red-500 mt-2 inline-block">Read more</button>
      </div>
    </Link>
  );
}
