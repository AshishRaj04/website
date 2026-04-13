import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vlaut80a",
  dataset: "production",
  apiVersion: "2026-04-01",
  useCdn: false,
});