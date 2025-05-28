import { z } from "zod";

export const NoteSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  content: z.string(),
  color: z.enum(["red", "blue", "green", "yellow", "gray"]).default("gray"),
});
