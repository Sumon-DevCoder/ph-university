import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      {label ? label : null}

      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} name={name} />}
      />

      <input type={type} id={name} {...register(name)} />
    </div>
  );
};

export default PHInput;
