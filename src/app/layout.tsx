import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ContainerWrapper from "./components/ContainerWrapper";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "100", "900", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aurora tech task",
  description: "Aurora tech task for frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-[lato] p-5  antialiased bg-[#343434]`}>
        <Sidebar />
        <div className="w-full ">
          <ContainerWrapper>
            <div className="ml-[80px] transition-all duration-600 ease-in-out">
              <Header />
            </div>
            <div className="pb-5 pt-7 md:ml-[80px] transition-all duration-600 ease-in-out">
              {children}
            </div>
          </ContainerWrapper>
        </div>
      </body>
    </html>
  );
}
