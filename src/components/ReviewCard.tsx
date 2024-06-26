import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 space-y-3 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <div className="flex gap-0.5 mb-2">
        <Star className="h-5 w-5 text-red-600 fill-red-600" />
        <Star className="h-5 w-5 text-red-600 fill-red-600" />
        <Star className="h-5 w-5 text-red-600 fill-red-600" />
        <Star className="h-5 w-5 text-red-600 fill-red-600" />
        <Star className="h-5 w-5 text-red-600 fill-red-600" />
      </div>
    </figure>
  );
};

export default ReviewCard;
