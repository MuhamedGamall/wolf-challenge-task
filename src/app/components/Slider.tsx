"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CardsSlider({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" w-full"
    >
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 max-w-[344px]"
          >
            <div className="p-1  ">{children}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
