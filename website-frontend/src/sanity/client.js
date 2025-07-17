import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "p2xa2co7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});