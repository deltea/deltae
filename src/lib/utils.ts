import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function pickRandom<T>(array: T[], exclude: T | null = null): T {
  const filteredArray = array.filter(x => x !== exclude);
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex];
}

export function cn(...values: ClassValue[]) {
  return twMerge(clsx(values));
}

export function formatDate(dateString: string | Date) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
}
