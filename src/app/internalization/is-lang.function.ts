import { langList } from "./lang.constants";
import { Lang } from "./lang.types";

export function isLang(key: unknown): boolean {
  return !!key && typeof key === 'string' && langList.includes(key as Lang);
}
