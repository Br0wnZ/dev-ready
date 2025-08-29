import { readFile } from "node:fs/promises";
import type { Topic } from "../core/entities/topic";
import type { TopicRepo } from "../core/ports/topic-repo";

export class FSTopicRepo implements TopicRepo {
  async listAll(): Promise<Topic[]> {
    const url = new URL("../content/index.json", import.meta.url);
    const text = await readFile(url, "utf-8");
    return JSON.parse(text) as Topic[];
  }
}
