import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ServiceCard({
  title,
  description,
  tags
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}
