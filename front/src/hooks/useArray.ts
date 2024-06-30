import { IBestSearch } from "@/type";

export default function useArray(arr: IBestSearch[], size: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
