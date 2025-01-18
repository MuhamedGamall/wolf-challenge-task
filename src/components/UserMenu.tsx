import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";

export default function UserMenu() {
  const t = useTranslations("Layout.Header.UserProfile");
  return (
    <div className="flex items-center gap-7">
      <div className="flex items-center gap-3">
        <Image
          src="/person.webp"
          width={50}
          height={50}
          alt="user"
          className="rounded-full min-w-[50px]"
        />
        <div className="max-sm:hidden">
          <p className="text-white text-lg font-medium">{t("userName")}</p>
          <p className="text-[#C2C2C2] text-[15px]">{t("viewProfile")}</p>
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
