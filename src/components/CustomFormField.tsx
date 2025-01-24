import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CustomFormFieldProps, FormFieldType } from "@/types";

const RenderInput = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="mt-1">
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="appearance-none block w-full px-3 bg-[#4d4d4d] text-white   py-2  border-none placeholder:text-white  rounded-md shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0  sm:text-sm"
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <div className="mt-1">
          <FormControl>
            <Textarea
              placeholder={props.placeholder}
              {...field}
              className="appearance-none bg-[#4d4d4d] text-white  block w-full px-3 py-2 border-none rounded-md shadow-sm placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0    sm:text-sm"
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 w-full">
          {props.fieldType && label && (
            <FormLabel className="block text-sm font-medium text-white">
              {label}
            </FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className="text-red-500 text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
