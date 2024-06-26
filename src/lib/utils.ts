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

export function shadeColor(color: string, amount: number) {
  let usePound = false;
  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  let b = ((num >> 8) & 0x00FF) + amount;
  if (b > 255) b = 255;
  else if  (b < 0) b = 0;
  let g = (num & 0x0000FF) + amount;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}
