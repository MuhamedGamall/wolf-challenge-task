import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const truncateText = (text: string, limit: number) => {
  return text?.length > limit ? text?.substring(0, limit) + "..." : text;
};
