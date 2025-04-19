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
    <div className="w-full h-auto p-8">
      <h2>Avaliações direto da Amazon</h2>
      <Carousel>
        <CarouselContent>
          {reviewsData.map((review, index) => (
            <CarouselItem className=" basis-full md:basis-1/3" key={index}>
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
