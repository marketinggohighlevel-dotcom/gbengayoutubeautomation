import { describe, expect, it } from "vitest";

import { filterProjects, portfolioCategories, portfolioProjects } from "@/data/portfolio";

describe("portfolio sample selection", () => {
  it("provides the six illustrative samples requested for the portfolio", () => {
    expect(portfolioProjects).toHaveLength(6);
    expect(portfolioProjects.every((project) => project.slug.length > 0)).toBe(true);
  });

  it("offers the requested topic filters and returns matching work", () => {
    expect(portfolioCategories).toEqual([
      "All",
      "Documentary & History",
      "Automotive",
      "Business & Finance",
      "Science & Space",
      "Sports",
      "Geography & Megaprojects",
    ]);
    expect(filterProjects("Science & Space").map((project) => project.title)).toEqual([
      "Asteroid Bennu and the Search for Life’s Ingredients",
    ]);
    expect(filterProjects("All")).toHaveLength(6);
  });
});