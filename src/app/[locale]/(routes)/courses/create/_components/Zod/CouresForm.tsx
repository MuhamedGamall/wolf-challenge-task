"use client";

import CustomFormField from "@/components/CustomFormField";
import { FileUploader } from "@/components/FileUploader";
import { CoursesContext } from "@/components/Providers";
import { Button } from "@/components/ui/button";
import { Form, FormControl } from "@/components/ui/form";
import { Course, FormFieldType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { format } from "node:util";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// TODO: ADD LOCALIZATION
export const CourseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "Title must be at least 4 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  description: z
    .string()
    .trim()
    .max(500, { message: "Description must be less than 500 characters" }),
  image: z
    .string()
    .refine((value) => value !== "", { message: "Please upload image" }),
  video: z
    .string()
    .refine((value) => value !== "", { message: "Please upload video" }),
});

export default function CourseForm() {
  const { courses, setCourses } = useContext(CoursesContext);
  const t = useTranslations(
    "Layout.Pages.MyCourses.Course.Create.Content.Sections.form"
  );
  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      video: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CourseSchema>) => {
    try {
      setCourses((curr: Course[]) => [
        ...curr,
        { ...values, id: Date.now(), date: format(new Date()).split("GMT")[0] },
      ]);
      alert(t("alerts.courseCreated"));
      // return form.reset();
    } catch (error) {
      alert(t("alerts.courseNotCreated"));
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[800px] space-y-6 "
      >
        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="image"
          label={t("labels.image")}
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader
                t={t}
                disabled={form.formState.isSubmitting}
                file={form.getValues("image")}
                onChange={field.onChange}
                type="image"
              />
            </FormControl>
          )}
        />
        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="video"
          label={t("labels.video")}
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader
                t={t}
                disabled={form.formState.isSubmitting}
                file={form.getValues("video")}
                onChange={field.onChange}
                type="video"
              />
            </FormControl>
          )}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="title"
          disabled={form.formState.isSubmitting}
          label={t("labels.title")}
          placeholder={t("labels.title")}
        />
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="description"
          label={t("labels.description")}
          disabled={form.formState.isSubmitting}
          placeholder={t("labels.description")}
        />
        <div className="">
          <Button
            className="w-fit hover:opacity-80 hover:bg-[#D2F473] text-slate-800  bg-[#D2F473]"
            type="submit"
            name="submit"
          >
            {t("submitBtn")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
