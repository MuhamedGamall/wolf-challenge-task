import LibraryCard from "@/app/components/LibraryCard";
import TeachersCard from "@/app/components/TeachersCard";

export default function TeachersPage() {
  return (
    <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <TeachersCard key={index} />
      ))}
    </div>
  );
}
