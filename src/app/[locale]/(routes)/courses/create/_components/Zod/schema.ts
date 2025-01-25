import * as z from "zod";

export const createCourseSchema = (t: any) =>
  z.object({
    title: z
      .string()
      .trim()
      .min(4, { message: t("inputErrorMessages.title.min") })
      .max(100, { message: t("inputErrorMessages.title.max") }),
    description: z
      .string()
      .trim()
      .max(500, { message: t("inputErrorMessages.description.max") }),
    image: z.string().refine((value) => value !== "", {
      message: t("inputErrorMessages.image.required"),
    }),
    video: z.string().refine((value) => value !== "", {
      message: t("inputErrorMessages.video.required"),
    }),
  });
