"use client";
import { articles } from "@/lib/articles";
import ArticleCard from "@/components/organisms/article-card";
import Header from "@/components/organisms/header";
import Tabs from "@/components/organisms/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialFilter = searchParams.get("filter") || "all";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [visibleArticles, setVisibleArticles] = useState(2);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (activeFilter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", activeFilter);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });

    setVisibleArticles(2);
  }, [activeFilter, router]);

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === "all") return true;
    return article.category.toLowerCase().replace(/\s+/g, "-") === activeFilter;
  });

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-10">
      <div className="flex space-x-2 items-center">
        <MessageSquare className="h-10 w-10" />
        <Header title="News & Events" className="" />
      </div>
      <Tabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {filteredArticles
            .slice(0, Math.min(2, visibleArticles))
            .map((article, index) => (
              <ArticleCard
                id={article.id}
                key={index}
                image={article.image}
                date={article.date}
                category={article.category}
                title={article.title}
                description={article.description}
                bannerText={article.bannerText}
                hasImageBanner={article.hasImageBanner}
              />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredArticles.slice(2, visibleArticles).map((article, index) => (
            <ArticleCard
              id={article.id}
              key={index + 2}
              image={article.image}
              date={article.date}
              category={article.category}
              title={article.title}
              description={article.description}
              bannerText={article.bannerText}
              hasImageBanner={article.hasImageBanner}
            />
          ))}
        </div>

        {visibleArticles < filteredArticles.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreArticles}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
