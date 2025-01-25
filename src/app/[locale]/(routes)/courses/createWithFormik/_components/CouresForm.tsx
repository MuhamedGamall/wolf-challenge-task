"use client";

import CustomFormField from "@/app/[locale]/(routes)/courses/createWithFormik/_components/CustomFormField";
import { FileUploader } from "@/components/FileUploader";
import { CoursesContext } from "@/components/Providers";
import { Button } from "@/components/ui/button";
import {
  createCourseSchemaWithYup,
  createCourseSchemaWithZod,
} from "@/lib/formSchema";
import { Course, FormFieldType } from "@/types";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { format } from "util";
import * as y from "yup";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

type ZodCourseSchema = z.infer<ReturnType<typeof createCourseSchemaWithZod>>;
type YupCourseSchema = y.InferType<
  ReturnType<typeof createCourseSchemaWithYup>
>;

export default function CourseForm() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") as "one" | "two";
  type FormValuesType = typeof tab extends "one"
    ? ZodCourseSchema
    : YupCourseSchema;

  const { setCourses } = useContext(CoursesContext);
  const t = useTranslations(
    "Layout.Pages.MyCourses.Course.Create.Content.Sections.form"
  );

  const initialValues: FormValuesType = {
    title: "",
    description: "",
    image: "",
    video: "",
  };

  const validationSchema =
    tab === "one"
      ? toFormikValidationSchema(createCourseSchemaWithZod(t))
      : createCourseSchemaWithYup(t);

  const onSubmit = async (values: FormValuesType) => {
    try {
      const updatedValues = {
        ...values,
        id: Date.now(),
        date: format(new Date()).split("GMT")[0],
        validationBuilder: tab === "one" ? "zod" : "yup",
      };

      setCourses((curr: Course[]) => [...curr, updatedValues]);
      console.log(updatedValues);
      alert(t("alerts.courseCreated"));
    } catch (error) {
      alert(t("alerts.courseNotCreated"));
      console.error(error);
    }
  };
  return (
    <Formik
      key={tab}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        useEffect(() => {
          formik.resetForm();
        }, [tab]);
        return (
          <Form className="max-w-[800px] space-y-6">
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              name="image"
              label={t("labels.image")}
              renderSkeleton={() => (
                <FileUploader
                  t={t}
                  disabled={formik.isSubmitting}
                  file={formik.values.image as string}
                  onChange={(value) => formik.setFieldValue("image", value)}
                  type="image"
                />
              )}
            />
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              name="video"
              label={t("labels.video")}
              renderSkeleton={() => (
                <FileUploader
                  t={t}
                  disabled={formik.isSubmitting}
                  file={formik.values.video as string}
                  onChange={(value) => formik.setFieldValue("video", value)}
                  type="video"
                />
              )}
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="title"
              disabled={formik.isSubmitting}
              label={t("labels.title")}
              placeholder={t("labels.title")}
            />
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              name="description"
              label={t("labels.description")}
              disabled={formik.isSubmitting}
              placeholder={t("labels.description")}
            />
            <div>
              <Button
                className="w-fit hover:opacity-80 hover:bg-custom-accent text-slate-800 bg-custom-accent"
                type="submit"
                name="submit"
                disabled={formik.isSubmitting}
              >
                {t("submitBtn")}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
