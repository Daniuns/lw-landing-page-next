import { Star } from "lucide-react";

export default function ReviewItem({ review }: any) {
  return (
    <div className="flex flex-col justify-start w-full min-h-72 h-auto p-4 border-gray-200 border bg-gray-800 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-start w-full">{review.name}</h3>
      {/* <p className="text-primary">{review.date}</p> */}
      <h4 className="mt-2 w-full font-normal">{review.text}</h4>
      <div className="flex items-center mt-2">
        {Array.from({ length: review.stars }, (_, index) => (
          <span key={index} className="text-yellow-500">
            <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" size={24} />
          </span>
        ))}
      </div>
    </div>
  );
}
