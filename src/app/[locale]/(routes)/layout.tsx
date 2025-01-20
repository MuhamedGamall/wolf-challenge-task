import { cn } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import ContainerWrapper from "../../../components/ContainerWrapper";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

export default async function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  
  return (
    <div >
      <Sidebar />
      <div className="w-full ">
        <ContainerWrapper>
          <div
            className={cn("ml-[80px] transition-all duration-600 ease-in-out", {
              "mr-[80px] ml-0 ": locale == "ar",
            })}
          >
            <Header />
          </div>
          <div
            className={cn(
              "pb-5 pt-7 md:ml-[80px] transition-all duration-600 ease-in-out",
              { "md:mr-[80px] md:ml-0": locale == "ar" }
            )}
          >
            {children}
          </div>
        </ContainerWrapper>
      </div>
    </div>
  );
}
