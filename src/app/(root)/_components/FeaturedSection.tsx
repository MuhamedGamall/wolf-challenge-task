import { CardsSlider } from "@/app/components/Slider";
import TeachersCard from "@/app/components/TeachersCard";

export default function FeaturedSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full  mt-10 text-white ">
        <div className="flex w-full justify-between items-center">
          <h2 className="max-sm:text-lg text-2xl font-medium  mb-3 w-full">
            Featured Teachers:
          </h2>
          <div className="text-sm  whitespace-nowrap">View All</div>
        </div>

        <CardsSlider>
          <TeachersCard />
        </CardsSlider>
      </div>
    </section>
  );
}
