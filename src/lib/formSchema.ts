import * as z from "zod";
import * as y from "yup";

export const createCourseSchemaWithZod = (t: any) =>
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

export const createCourseSchemaWithYup = (t: any) =>
  y.object().shape({
    title: y
      .string()
      .required()
      .min(4, t("inputErrorMessages.title.min"))
      .max(100, t("inputErrorMessages.title.max")),
    description: y.string().max(500, t("inputErrorMessages.description.max")),
    image: y.string().required(t("inputErrorMessages.image.required")),
    video: y.string().required(t("inputErrorMessages.video.required")),
  });
