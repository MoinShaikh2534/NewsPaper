import { useState } from "react";
import { FeaturedNews } from "@/components/FeaturedNews";
import { NewsCard } from "@/components/NewsCard";
import { CategoryFilter } from "@/components/CategoryFilter";

const mockCategories = ["Technology", "Business", "Sports", "Entertainment", "Science"];

const mockFeaturedNews = {
  title: "SpaceX Successfully Launches Revolutionary New Satellite",
  description: "In a groundbreaking mission, SpaceX has launched its most advanced satellite yet, promising to revolutionize global internet connectivity.",
  category: "Technology",
  imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
};

const mockNews = [
  {
    title: "AI Breakthrough: New Model Achieves Human-Level Understanding",
    description: "Researchers announce a significant advancement in artificial intelligence, with new models showing unprecedented levels of language comprehension.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
  },
  {
    title: "Global Markets Rally as Tech Stocks Surge",
    description: "Stock markets worldwide see significant gains as major technology companies report better-than-expected earnings.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
  },
  {
    title: "Revolutionary Clean Energy Project Launches",
    description: "A new solar power initiative promises to provide sustainable energy to millions of homes.",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
  },
  {
    title: "Major Sports League Announces Expansion",
    description: "Professional sports league reveals plans to add new teams in emerging markets.",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
  },
  {
    title: "Entertainment Industry Embraces Virtual Reality",
    description: "Leading studios announce plans to release content in virtual reality format.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews = selectedCategory === "all"
    ? mockNews
    : mockNews.filter(news => news.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Latest News</h1>
        <p className="text-muted-foreground">Stay informed with the latest updates from around the world</p>
      </header>

      <section className="mb-12">
        <FeaturedNews {...mockFeaturedNews} />
      </section>

      <section>
        <CategoryFilter
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;