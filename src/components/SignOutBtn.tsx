"use client";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function SignOutBtn({
  forHeader,
  authenticated,
}: {
  forHeader?: boolean;
  authenticated: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("Layout.Header.UserProfile");

  return (
    <button
      className=" "
      onClick={() => signOut({ callbackUrl: `/${locale}` })}
    >
      {forHeader ? (
        <div className="text-white md:block hidden hover:text-custom-accent text-xs">
          {t("signOutBtn")}
        </div>
      ) : (
        authenticated && (
          <div
            className={
              "hover:text-custom-accent    w-[70px] h-[70px] mb-4 text-gray-400 rounded-[25px] border-custom-accent hidden max-md:flex flex-col items-center justify-center cursor-pointer hover:bg-[#D2F4731A] hover:border-2 transition-all duration-300"
            }
          >
            <LogOut
              className={cn("w-6 h-6 ", {
                "rotate-180": locale == "ar",
              })}
            />
            <p className="text-[10px] mt-1  whitespace-nowrap">
              {t("signOutBtn")}
            </p>
          </div>
        )
      )}
    </button>
  );
}
