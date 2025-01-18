import LibraryCard from "@/app/components/LibraryCard";

export default function LibraryPage() {
  return (
    <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <LibraryCard key={index} />
      ))}
    </div>
  );
}
