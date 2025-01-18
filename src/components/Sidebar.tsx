"use client";
import { SIDEBAR_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getPathname, Link, useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

function Sidebar() {
  const t = useTranslations("Layout.Sidebar");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <aside
      className={cn(
        "z-50 transition-all overflow-hidden duration-200  fixed top-5 left-5 rounded-[25px] border px-3 border-[#D2F473]  shadow-[0px_0px_15px_0px_#D2F47340]  py-[9px]  h-[82px] md:h-[750px] max-w-[90px] min-w-[90px] bg-[#484848] flex flex-col items-center  justify-start",
        {
          "h-[82px] ": !open && !isMobile,
          "h-[750px]": open && isMobile,
          "right-5 left-0": locale == "ar",
        }
      )}
    >
      <button
        onClick={() => isMobile && setOpen(!open)}
        className={cn("mb-7 transform transition-transform duration-300 cursor-default",{"cursor-pointer":isMobile})}
      >
        <Image
          src={"/logo.webp"}
          priority
          alt="logo"
          width={60}
          height={60}
          className={cn("object-contain")}
        />
      </button>
      <div
        className={cn(
          "flex flex-col items-center justify-start transition-opacity duration-300 ease-in-out",
          {
            "opacity-0 ": !open && isMobile,
            "opacity-100  delay-100": open,
          }
        )}
      >
        {SIDEBAR_ROUTES.map((route) => {
          const isActive =
            (pathname.replace(`/${locale}`, "") || "/") === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "w-[70px] h-[70px] mb-4 rounded-[25px] border-[#D2F473] flex flex-col items-center justify-center cursor-pointer hover:bg-[#D2F4731A] hover:border-2 transition-all duration-300",
                {
                  "bg-[#D2F4731A] text-[#D2F473] border-2": isActive,
                  "text-gray-400": !isActive,
                }
              )}
            >
              <route.icon className="w-6 h-6" />
              <p className="text-xs mt-1  whitespace-nowrap">
                {t(`${route.label.toLowerCase()}`)}
              </p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
