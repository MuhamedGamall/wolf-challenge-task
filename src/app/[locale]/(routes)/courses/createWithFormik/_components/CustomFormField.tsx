import { CustomFormFieldProps, FormFieldType } from "@/types";
import { ErrorMessage, Field } from "formik";
import { Input } from "../../../../../../components/ui/input";
import { Textarea } from "../../../../../../components/ui/textarea";

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
          <Input
            placeholder={props.placeholder}
            {...field}
            className="appearance-none block w-full px-3 bg-[#4d4d4d] text-white py-2 border-none placeholder:text-white rounded-md shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
            disabled={props.disabled}
          />
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <div className="mt-1">
          <Textarea
            onBlur={field.onBlur}
            placeholder={props.placeholder}
            {...field}
            className="appearance-none bg-[#4d4d4d] text-white block w-full px-3 py-2 border-none rounded-md shadow-sm placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
            disabled={props.disabled}
          />
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { name, label, fieldType } = props;

  return (
    <div className="flex-1 w-full">
      {fieldType && label && (
        <label className="block text-sm mb-1 font-medium text-white">
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }: { field: any }) => (
          <RenderInput field={field} props={{ ...props, ...field }} />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default CustomFormField;
