import { expect, test } from "vitest";
import { greet } from "../lib/greet";

test("greet greets", () => {
  expect(greet("world")).toBe("Hello, world!");
});
