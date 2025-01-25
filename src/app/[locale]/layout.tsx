import "./globals.css";

import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";
import { Providers } from "@/components/Providers";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "100", "900", "700"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  if (!routing.locales.includes(locale as any)) {
    return notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={cn(`font-[lato] p-5  antialiased bg-custom-background`, {
          "font-[cairo]": locale == "ar",
        })}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
