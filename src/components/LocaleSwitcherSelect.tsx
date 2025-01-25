"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as any;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "flex cursor-pointer items-center gap-4 text-gray-600",
        isPending && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="relative">
        <select
          className="block bg-custom-accentDark  min-w-[30px] rounded-md border transition-all  outline-none border-none text-white  py-2 pl-3 pr-8 text-sm  disabled:cursor-not-allowed appearance-none"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <ChevronDown className="absolute  right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
      </div>
    </label>
  );
}
