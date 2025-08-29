import { describe, it, expect } from "vitest";
import { FSTopicRepo } from "./fs-topic-repo";

describe("FSTopicRepo", () => {
  it("lists topics", async () => {
    const repo = new FSTopicRepo();
    const topics = await repo.listAll();
    expect(topics.length).toBeGreaterThan(0);
  });
});
