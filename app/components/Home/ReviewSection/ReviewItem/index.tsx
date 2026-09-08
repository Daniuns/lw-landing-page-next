import { Star } from "lucide-react";

export default function ReviewItem({ review }: any) {
  return (
    <article className="flex min-h-72 w-full flex-col justify-start rounded-xl border border-white/10 bg-white/[.05] p-6 shadow-lg">
      <p className="mb-2 font-sans text-sm text-slate-400">{review.name} </p>
      <div className="flex items-center gap-1 text-yellow-400">
        {Array.from({ length: review.stars }, (_, index) => (
          <span key={index}>
            <Star fill="currentColor" size={18} />
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-xl text-white">{review.title}</h3>
      {review.text && (
        <p className="mt-3 font-sans leading-relaxed text-slate-300">
          “{review.text}”
        </p>
      )}
    </article>
  );
}
