import type { Topic } from "../entities/topic";

export interface TopicRepo {
  listAll(): Promise<Topic[]>;
}
