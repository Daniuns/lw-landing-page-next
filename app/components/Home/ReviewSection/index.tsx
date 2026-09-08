import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/components/ui/carousel";
import ReviewItem from "./ReviewItem";
import { reviewsData } from "@/app/services/reviews";

export default function ReviewSection() {
  return (
    <div className="w-full">
      <p className="section-kicker">Leitores recomendam</p>
      <h2 id="reviews-title">Avaliações de leitores na Amazon</h2>
      <p className="mb-8 font-sans text-slate-300">
        Avaliações publicadas com nota máxima.
      </p>
      <Carousel>
        <CarouselContent>
          {reviewsData.map((review, index) => (
            <CarouselItem className="basis-full md:basis-1/3" key={index}>
              <ReviewItem review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
