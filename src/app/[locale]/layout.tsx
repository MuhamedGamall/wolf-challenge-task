import type { Metadata } from "next";
import "./globals.css";
import ContainerWrapper from "../../components/ContainerWrapper";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "100", "900", "700"],
  variable: "--font-sans",
});
// export const metadata: Metadata = {
//   title: "Aurora tech task",
//   description: "Aurora tech task for frontend developer",
// };
export const generateMetadata = async () => 
{
  const t = await getTranslations('MetaData');
  return {
    title: t('title'),
    description: t('description'),
  }

}


export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  if (!routing.locales.includes(locale as any) ) {
    return notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={cn(`font-[lato] p-5  antialiased bg-[#343434]`, {
          "font-[cairo]": locale == "ar",
        })}
      >
        <NextIntlClientProvider messages={messages}>
          <Sidebar />
          <div className="w-full ">
            <ContainerWrapper>
              <div
                className={cn(
                  "ml-[80px] transition-all duration-600 ease-in-out",
                  { "mr-[80px] ml-0 ": locale == "ar" }
                )}
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
