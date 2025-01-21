import LocaleSwitcher from "@/components/LocaleSwitcher";
import SignInForm from "../_components/AuthForm";
import { Link } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function SignInPage() {
  const locale = await getLocale();
  const Chevron = locale == "ar" ? ChevronRight : ChevronLeft;
  const t = await getTranslations("Layout");
  console.log(t("BackToHome"));
  
  return (
    <div className="">
      <div className="flex items-center gap-4 justify-between w-full">
        <Link
          href="/"
          className="text-sm whitespace-nowrap flex items-center gap-2 text-white"
        >
          <Chevron strokeWidth={3} className="w-4 h-4" />
          {t("BackToHome")}
        </Link>
        <LocaleSwitcher />
      </div>
      <SignInForm />
    </div>
  );
}
