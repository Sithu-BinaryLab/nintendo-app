"use client";
import GameCard from "@/components/organisms/game-card";
import Header from "@/components/organisms/header";
import RedUnderline from "@/components/organisms/red-underline";
import { articles } from "@/lib/articles";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArticleDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((a) => a.id === slug);

  if (!article) {
    return <div className="text-center p-4">Article not found</div>;
  }

  return (
    <section className="w-full bg-white mx-auto mt-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-4 px-4">
        <div className="flex space-x-2 items-center">
          <MessageSquare className="h-10 w-10" />
          <Header title="News" />
        </div>
        <Link href="/whatsnew" className="underline text-red-500 font-bold">
          See all new articles
        </Link>
      </div>
      <div className="w-full  bg-gray-100 my-10 py-10">
        <div className="max-w-3xl p-4 mx-auto">
          {article.hasImageBanner && article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover mb-4 rounded-lg"
            />
          )}

          <div className="flex items-center justify-between space-x-2 mb-4">
            <span className="text-red-500 font-semibold">{article.date}</span>
            <button className="bg-red-600 text-white px-4 py-2 font-bold rounded-md">
              Learn more
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          {/* <p className="text-gray-700 mb-4">{article.description}</p> */}
          <div>
            Did you know? Active <RedUnderline text="Nintendo Switch Online" />
            members have access to a trove of exclusive benefits like
            <RedUnderline text="playing online" />
            in compatible games, exploring a collection of{" "}
            <RedUnderline text="classic titles" />, saving with{" "}
            <RedUnderline
              text="Nintendo Switch
            Game Vouchers*"
            />
            , and more! With the latest updates in May, you can discover even
            more ways to enjoy your benefits.
          </div>
          <p className="py-4">
            Without further ado, let’s dive into what’s new with Nintendo Switch
            Online.
          </p>
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2 bg-red-500 text-white p-3 w-fit rounded-md">
              Nintendo Classics
            </h2>
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/_ujPFKjIVyo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="my-4"
            ></iframe>
            <h2 className="text-xl font-bold mb-2">
              A retro fighting game joins the roster
            </h2>
            <p>
              Pick your fighter and battle it out in the KILLER INSTINCT® GOLD
              game, now available to play in the{" "}
              <RedUnderline text="Nintendo™ 64" /> collection.
            </p>
          </div>

          <div className="mb-4">
            {/* <h2 className="text-3xl font-bold mb-2 bg-red-500 text-white p-3 w-fit rounded-md">
              Nintendo Classics
            </h2> */}
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/9LmocGJOdZk?si=3sszMJJnHDhZ8MLf"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="my-4"
            ></iframe>
            <h2 className="text-xl font-bold mb-2">
              Ready yourself for battle
            </h2>
            <p>
              Use cunning strategy and guide your troops to victory in the Fire
              Emblem™: The Sacred Stones game, available now in the{" "}
              <RedUnderline
                text="Game Boy™
              Advance"
              />{" "}
              collection.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2 bg-red-500 text-white p-3 w-fit rounded-md">
              Online play
            </h2>

            <p>
              Members can connect with friends and family in games with{" "}
              <RedUnderline
                text="online
              play"
              />
              . Check out limited-time in-game events members can participate
              in, as well as newly released games with online multiplayer.
            </p>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover my-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">Get lost in Wonderland</h2>
            <p>
              Meet Alice and the Cheshire Cat in a free update to the{" "}
              <RedUnderline
                text="Disney
              Dreamlight Valley"
              />
              game. Decorate your neighborhood with fairy-inspired items, then
              invite your friends for a whimsical visit in online multiplayer.
            </p>
          </div>
        </div>
        {article.relatedGames && article.relatedGames.length > 0 && (
          <div className="mb-4 max-w-7xl mx-auto">
            {article.relatedGames.map((game, index) => (
              <GameCard
                key={index}
                image={game.image}
                title={game.title}
                price={game.price}
                platform={game.platform}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
