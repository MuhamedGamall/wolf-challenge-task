import { Control } from "react-hook-form";

export type Tab = "tabOne" | "tabTwo";

export type FileUploaderProps = {
  file: string;
  onChange: (file: string) => void;
  disabled?: boolean;
  type: "image" | "video";
  t: any;
};
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SKELETON = "skeleton",
}
export type CustomFormFieldProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
};
export type Course = {
  title: string;
  description: string;
  image: string;
  video: string;
  id: number;
  date: string;
  validationBuilder: 'Yup' | 'Zod';
};
