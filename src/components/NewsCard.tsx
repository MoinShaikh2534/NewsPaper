import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export function NewsCard({ title, description, category, imageUrl }: NewsCardProps) {
  return (
    <Card className="news-card overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="p-4">
        <h3 className="font-bold text-lg line-clamp-2 hover:text-primary cursor-pointer">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}