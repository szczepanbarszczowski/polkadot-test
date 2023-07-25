import React from 'react';
import { Control, FieldPath, FieldValues, RegisterOptions, useController } from 'react-hook-form';

interface FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  defaultValue?: any;
  children: any;
  required?: boolean;
  rules?: Pick<
    RegisterOptions<TFieldValues, TName>,
    'min' | 'max' | 'minLength' | 'maxLength' | 'required' | 'validate'
  >;
}

const FormItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  control,
  name,
  defaultValue = '',
  rules,
  required = false,
}: FormItemProps<TFieldValues, TName>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController<TFieldValues, TName>({
    name,
    control,
    defaultValue,
    rules: { ...rules, required },
  });

  return React.cloneElement(children, {
    onChange: onChange,
    value,
    error: !!error,
    required,
    errorMsg: error?.message,
  });
};

export default FormItem;
