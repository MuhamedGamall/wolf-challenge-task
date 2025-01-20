"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { signOut, useSession } from "next-auth/react";
import { Link } from "@/i18n/routing";
import { LoaderIcon } from "lucide-react";
import SignOutBtn from "./SignOutBtn";

export default function UserMenu() {
  const session = useSession();
  const loading = session.status === "loading";
  const authenticated = session.status === "authenticated";
  const t = useTranslations("Layout.Header.UserProfile");

  return (
    <div className="flex items-center gap-7">
      {loading ? (
        <div className="bg-[#484848]  px-6 py-2 rounded-md">
          <LoaderIcon
            className="animate-spin"
            size={20}
            stroke="white"
            color="white"
          />
        </div>
      ) : authenticated ? (
        <div className="flex items-center gap-3">
          <SignOutBtn forHeader  authenticated={authenticated}/>

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
      ) : (
        <Link href="/signIn" className="text-[#C2C2C2] hover:text-[#D2F473]">
          {t("signInBtn")}
        </Link>
      )}
    </div>
  );
}
