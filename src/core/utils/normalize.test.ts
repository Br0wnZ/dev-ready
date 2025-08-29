import { describe, it, expect } from "vitest";
import { normalize } from "./normalize";

describe("normalize", () => {
  it("removes accents and lowers", () => {
    expect(normalize("Árbol")).toBe("arbol");
  });
});
