import { render } from "@testing-library/astro";
import { expect, test } from "vitest";
import SearchControls from "./SearchControls.astro";

const dict = {
  search: { placeholder: "Buscar..." },
  filters: { all: "Todas" },
  results: { count: "Resultados: {count}" }
};

test("renders search input", async () => {
  const { getByPlaceholderText } = await render(SearchControls, { props: { topics: [], dict } });
  expect(getByPlaceholderText("Buscar...")).toBeTruthy();
});
