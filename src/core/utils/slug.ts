import { normalize } from "./normalize";

export function slugify(text: string): string {
  return normalize(text).replace(/\s+/g, "-");
}
