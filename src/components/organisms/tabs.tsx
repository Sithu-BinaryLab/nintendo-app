type TabsProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function Tabs({ activeFilter, onFilterChange }: TabsProps) {
  const filters = [
    { label: "All", value: "all" },
    { label: "Game News", value: "game-news" },
    { label: "Events", value: "events" },
    { label: "Promotions", value: "promotions" },
    { label: "Nintendo Switch Online", value: "nintendo-switch-online" },
    { label: "Ask The Developer", value: "ask-the-developer" },
  ];

  return (
    <section className="bg-white my-4 px-4">
      <div className="flex space-x-2 items-center mt-2">
        <p className="text-black text-lg">Filter articles:</p>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 py-2 rounded-full font-bold ${
              activeFilter === filter.value
                ? "bg-red-500 text-white"
                : "bg-white text-red-600 border border-red-500 hover:bg-gray-100"
            }`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  );
}
