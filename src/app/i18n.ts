import es from "../i18n/es.json";
import en from "../i18n/en.json";

export const dictionaries = { es, en } as const;
export type Lang = keyof typeof dictionaries;

export function getDict(lang: string) {
  return dictionaries[(lang as Lang)] ?? dictionaries.es;
}

export function t(dict: Record<string, any>, path: string): string {
  return path.split(".").reduce((acc, key) => acc?.[key], dict) ?? path;
}
