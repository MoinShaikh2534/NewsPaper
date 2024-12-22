import { Card, CardContent } from "@/components/ui/card";

interface FeaturedNewsProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export function FeaturedNews({ title, description, category, imageUrl }: FeaturedNewsProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer">
      <div className="aspect-[21/9] relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <span className="px-2 py-1 text-xs font-semibold bg-primary rounded-full mb-3 inline-block">
            {category}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-sm md:text-base text-gray-200 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}