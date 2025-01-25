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
import { createCourseSchema } from "./schema";

type CourseSchema = z.infer<ReturnType<typeof createCourseSchema>>;
export default function CourseForm() {
  const { setCourses } = useContext(CoursesContext);
  const t = useTranslations(
    "Layout.Pages.MyCourses.Course.Create.Content.Sections.form"
  );
  const form = useForm<CourseSchema>({
    resolver: zodResolver(createCourseSchema(t)),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      video: "",
    },
  });

  const onSubmit = async (values: CourseSchema) => {
    try {
      setCourses((curr: Course[]) => [
        ...curr,
        { ...values, id: Date.now(), date: format(new Date()).split("GMT")[0] },
      ]);
      alert(t("alerts.courseCreated"));
      return form.reset();
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
                file={form.getValues("image") as string}
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
                file={form.getValues("video") as string}
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
