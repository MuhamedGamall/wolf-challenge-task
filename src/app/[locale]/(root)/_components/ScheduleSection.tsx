import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const UpcomingSection = ({ t, type }: { t: any; type: string }) => {
  return (
    <div className="w-full">
      <h2 className="max-sm:text-lg text-2xl font-medium text-white mb-2">
        {t(`${type}.title`)}
      </h2>
      <div className="py-7 px-8 shadow-[0px_0px_15px_0px_#00000033] bg-[#484848] flex rounded-xl text-center gap-3 flex-col justify-center">
        <div className="flex max-xs:items-start max-xs:flex-col xs:gap-3 max-xs:gap-2 bg-[#343434] p-3 rounded-xl">
          <div className="flex max-xs:items-center max-xs:gap-2 items-center justify-center xs:flex-col">
            <span className="text-white text-[20px]">
              {t(`${type}.tuesday.day`)}
            </span>
            <span className="text-white text-[13px]">
              {t(`${type}.tuesday.date`)}
            </span>
          </div>
          <div className="xs:block min-w-[1px] max-w-[1px] bg-slate-300" />
          <hr className="xs:hidden w-[90%] bg-slate-300" />
          <div className="flex items-center justify-center flex-col">
            <span className="text-white text-[20px] whitespace-nowrap">
              {t(`${type}.tuesday.subject`)}
            </span>
            <span className="text-white max-xs:text-[11px] text-[13px] whitespace-nowrap">
              {t(`${type}.tuesday.time`)}
            </span>
          </div>
        </div>
        <div className="flex max-xs:items-start max-xs:flex-col xs:gap-3 max-xs:gap-2 bg-[#343434] p-3 rounded-xl">
          <div className="flex max-xs:items-center max-xs:gap-2 items-center justify-center xs:flex-col">
            <span className="text-white text-[20px]">
              {t(`${type}.wednesday.day`)}
            </span>
            <span className="text-white text-[13px]">
              {t(`${type}.wednesday.date`)}
            </span>
          </div>
          <div className="xs:block min-w-[1px] max-w-[1px] bg-slate-300" />
          <hr className="xs:hidden w-[90%] bg-slate-300" />
          <div className="flex items-center justify-center flex-col">
            <span className="text-white text-[20px] whitespace-nowrap">
              {t(`${type}.wednesday.subject`)}
            </span>
            <span className="text-white max-xs:text-[11px] text-[13px] whitespace-nowrap">
              {t(`${type}.wednesday.time`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ScheduleSection({ t }: { t: any }) {
  return (
    <section>
      <div className="flex gap-10 max-lg:flex-col">
        <div className="flex-[3]">
          <h2 className="max-sm:text-lg text-2xl font-medium text-white mb-3 w-full">
            {t("schedule.title")}
          </h2>
          <div className="w-full h-[430px]  rounded-xl bg-gradient-to-br from-[#343434] to-[#484848] shadow-[0px_0px_15px_0px_#00000033]" />        </div>
        <div className="flex-[1.2] flex max-md:flex-col lg:flex-col gap-7">
          <UpcomingSection t={t} type="upcomingMeetings" />
          <UpcomingSection t={t} type="upcomingTasks" />
        </div>
      </div>
    </section>
  );
}
